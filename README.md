# DESIGNER — Seed-budsjett og neste handlinger

GitHub: **https://github.com/Irekaz/DESIGNER** — se [SETUP-GITHUB.md](SETUP-GITHUB.md) for push + Cloud Agent secrets.

## Seed (før drop — ikke batch)
| Post | Estimert |
|---|---|
| Samples (2–3 runder × 3 SKU) | €3–8k |
| Motiv/design + labels | €1–3k |
| Foto (sample) | €0.5–2k |
| Shopify + domene + e-post | €0.3–1k |
| IP (logo + søknad start) | €1–3k |
| Buffer | €1–2k |
| **Sum seed** | **ca. €7–19k** |

Batch betales av pre-order.

## Founder-handlinger denne uken
1. Kjøp `designer.bike` (+ `designerstudio.no` eller `bydesigner.no`)
2. Bestem ENK vs AS + regnskapsfører-prat
3. Send RFQ (`rfq/RFQ-PORTUGAL.md`) til 4 fabrikker
4. Brief designer på `brand/VISUELL-BRIEF.md` (Band Geometry)
5. Sett opp waitlist-landing (kan være enkel Side/Framer/Shopify password)

## Design MCP (produktdesign)

Konfigurert i [`.cursor/mcp.json`](/agent/.cursor/mcp.json):

| Server | Secret | Bruk | Nøkkel |
|---|---|---|---|
| **Ideogram** | `IDEOGRAM_API_KEY` | Band Geometry-motiv, print, konsept | [ideogram.ai/manage-api](https://ideogram.ai/manage-api) |
| **FASHN** | `FASHN_API_KEY` | Product-to-model, try-on, plagg-mockups | [FASHN Developer API](https://app.fashn.ai) |

**Oppsett:**
1. Hent begge API-nøkler
2. Legg inn som secrets i Cloud Agent-miljøet (Cursor Dashboard → Environment → Secrets)
3. Refresh MCP i Cursor Settings, eller start ny agent-kjøring

**Ideogram-output:** `design/motif/concepts/`  
**FASHN-mockups:** lagre manuelt i `design/mockups/{loop-shirt,ls-jersey,gilet}/`

## Filindeks (NO)
- `research/IP-og-domene.md`
- `research/COMPLIANCE-NO.md`
- `research/SELSKAP-NO.md`
- `research/DOMENE.md`
- `research/FOUNDER-ACTIONS-LOG.md`
- `brand/VISUELL-BRIEF.md`
- `brand/DROP-OPS.md`
- `tech-packs/LOOP-SHIRT.md`
- `tech-packs/LONG-SLEEVE-JERSEY.md`
- `tech-packs/SOFTSHELL-GILET.md`
- `tech-packs/JERSEY.md` (legacy SS — not Drop 01)
- `tech-packs/BIB.md` (Drop 02)
- `rfq/RFQ-PORTUGAL.md`
- `waitlist/` — Autumn Loop waitlist landing

## English pack (for factories / partners)
- `en/brand/VISUAL-BRIEF.md`
- `en/brand/DROP-OPS.md`
- `en/tech-packs/LOOP-SHIRT.md`
- `en/tech-packs/LONG-SLEEVE-JERSEY.md`
- `en/tech-packs/SOFTSHELL-GILET.md`
- `en/tech-packs/JERSEY.md` / `BIB.md` (reference)
- `en/rfq/RFQ-PORTUGAL.md`
- Index: `en/README.md`
