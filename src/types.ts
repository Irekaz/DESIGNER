export type ShapeKind = 'rectangle' | 'ellipse' | 'text'

export interface Shape {
  id: string
  kind: ShapeKind
  x: number
  y: number
  width: number
  height: number
  fill: string
  text: string
  rotation: number
}

export const PALETTE: readonly string[] = [
  '#6366f1',
  '#ec4899',
  '#f97316',
  '#eab308',
  '#22c55e',
  '#06b6d4',
  '#3b82f6',
  '#8b5cf6',
  '#f43f5e',
  '#0ea5e9',
  '#14b8a6',
  '#1e293b',
]
