import { useCallback, useMemo, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { PALETTE } from './types'
import type { Shape, ShapeKind } from './types'
import './App.css'

let shapeCounter = 0
function createId(): string {
  shapeCounter += 1
  return `shape-${Date.now().toString(36)}-${shapeCounter}`
}

function shapeLabel(kind: ShapeKind): string {
  switch (kind) {
    case 'rectangle':
      return 'Rectangle'
    case 'ellipse':
      return 'Ellipse'
    case 'text':
      return 'Text'
    default: {
      const _exhaustive: never = kind
      return _exhaustive
    }
  }
}

function makeShape(kind: ShapeKind, fill: string): Shape {
  const base = {
    id: createId(),
    kind,
    x: 120 + Math.round(Math.random() * 160),
    y: 100 + Math.round(Math.random() * 120),
    fill,
    rotation: 0,
  }
  switch (kind) {
    case 'rectangle':
      return { ...base, width: 160, height: 110, text: '' }
    case 'ellipse':
      return { ...base, width: 140, height: 140, text: '' }
    case 'text':
      return { ...base, width: 220, height: 56, text: 'Double-click to edit', fill }
    default: {
      const _exhaustive: never = kind
      return _exhaustive
    }
  }
}

interface DragState {
  id: string
  offsetX: number
  offsetY: number
}

export default function App() {
  const [shapes, setShapes] = useState<Shape[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [activeColor, setActiveColor] = useState<string>(PALETTE[0])
  const [canvasBg, setCanvasBg] = useState<string>('#0b1020')
  const dragRef = useRef<DragState | null>(null)
  const canvasRef = useRef<HTMLDivElement | null>(null)

  const selectedShape = useMemo(
    () => shapes.find((s) => s.id === selectedId) ?? null,
    [shapes, selectedId],
  )

  const addShape = useCallback(
    (kind: ShapeKind) => {
      const shape = makeShape(kind, activeColor)
      setShapes((prev) => [...prev, shape])
      setSelectedId(shape.id)
    },
    [activeColor],
  )

  const updateShape = useCallback((id: string, patch: Partial<Shape>) => {
    setShapes((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)))
  }, [])

  const deleteSelected = useCallback(() => {
    if (!selectedId) return
    setShapes((prev) => prev.filter((s) => s.id !== selectedId))
    setSelectedId(null)
  }, [selectedId])

  const onPointerDownShape = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>, shape: Shape) => {
      event.stopPropagation()
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      dragRef.current = {
        id: shape.id,
        offsetX: event.clientX - rect.left - shape.x,
        offsetY: event.clientY - rect.top - shape.y,
      }
      setSelectedId(shape.id)
      event.currentTarget.setPointerCapture(event.pointerId)
    },
    [],
  )

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current
      const canvas = canvasRef.current
      if (!drag || !canvas) return
      const rect = canvas.getBoundingClientRect()
      const nextX = Math.round(event.clientX - rect.left - drag.offsetX)
      const nextY = Math.round(event.clientY - rect.top - drag.offsetY)
      updateShape(drag.id, {
        x: Math.max(0, Math.min(nextX, rect.width - 20)),
        y: Math.max(0, Math.min(nextY, rect.height - 20)),
      })
    },
    [updateShape],
  )

  const endDrag = useCallback(() => {
    dragRef.current = null
  }, [])

  const editText = useCallback(
    (shape: Shape) => {
      if (shape.kind !== 'text') return
      const next = window.prompt('Edit text', shape.text)
      if (next !== null) updateShape(shape.id, { text: next })
    },
    [updateShape],
  )

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark" aria-hidden />
          <div>
            <h1>DESIGNER</h1>
            <p>Lightweight canvas studio</p>
          </div>
        </div>

        <section className="panel">
          <h2>Add element</h2>
          <div className="tool-grid">
            <button type="button" className="tool" onClick={() => addShape('rectangle')}>
              <span className="tool-icon rect" aria-hidden />
              Rectangle
            </button>
            <button type="button" className="tool" onClick={() => addShape('ellipse')}>
              <span className="tool-icon ellipse" aria-hidden />
              Ellipse
            </button>
            <button type="button" className="tool" onClick={() => addShape('text')}>
              <span className="tool-icon text" aria-hidden>
                T
              </span>
              Text
            </button>
          </div>
        </section>

        <section className="panel">
          <h2>Color</h2>
          <div className="swatches">
            {PALETTE.map((color) => (
              <button
                key={color}
                type="button"
                className={`swatch${activeColor === color ? ' active' : ''}`}
                style={{ backgroundColor: color }}
                aria-label={`Use color ${color}`}
                onClick={() => {
                  setActiveColor(color)
                  if (selectedShape) updateShape(selectedShape.id, { fill: color })
                }}
              />
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Canvas</h2>
          <label className="field">
            Background
            <input
              type="color"
              value={canvasBg}
              onChange={(e) => setCanvasBg(e.target.value)}
            />
          </label>
        </section>

        <section className="panel selection-panel">
          <h2>Selection</h2>
          {selectedShape ? (
            <div className="selection">
              <p className="selection-title">{shapeLabel(selectedShape.kind)}</p>
              <dl>
                <div>
                  <dt>x</dt>
                  <dd>{selectedShape.x}</dd>
                </div>
                <div>
                  <dt>y</dt>
                  <dd>{selectedShape.y}</dd>
                </div>
              </dl>
              <button type="button" className="danger" onClick={deleteSelected}>
                Delete element
              </button>
            </div>
          ) : (
            <p className="empty">Select an element to edit it.</p>
          )}
        </section>

        <footer className="sidebar-footer">{shapes.length} element(s) on canvas</footer>
      </aside>

      <main className="stage">
        <div
          ref={canvasRef}
          className="canvas"
          style={{ backgroundColor: canvasBg }}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerDown={() => setSelectedId(null)}
        >
          {shapes.length === 0 && (
            <div className="canvas-hint">
              <p>Your canvas is empty.</p>
              <p>Add a rectangle, ellipse, or text from the left to begin.</p>
            </div>
          )}
          {shapes.map((shape) => (
            <div
              key={shape.id}
              role="button"
              tabIndex={0}
              className={`shape ${shape.kind}${selectedId === shape.id ? ' selected' : ''}`}
              style={{
                left: shape.x,
                top: shape.y,
                width: shape.width,
                height: shape.height,
                backgroundColor: shape.kind === 'text' ? 'transparent' : shape.fill,
                color: shape.fill,
              }}
              onPointerDown={(e) => onPointerDownShape(e, shape)}
              onDoubleClick={() => editText(shape)}
            >
              {shape.kind === 'text' ? shape.text : null}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
