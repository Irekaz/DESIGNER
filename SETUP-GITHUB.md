# GitHub — Irekaz/DESIGNER

Repo: **https://github.com/Irekaz/DESIGNER**

Lokal git på `main` er klar med brand, tech packs, waitlist, MCP og environment. GitHub-repoet er opprettet men **tomt** — push én gang fra din maskin.

## Push innhold (velg én)

### A) GitHub CLI (enklest)

Fra mappen med filene (eller etter `git clone` av bundle):

```bash
cd DESIGNER
git remote add origin https://github.com/Irekaz/DESIGNER.git
git push -u origin main
```

Hvis `origin` finnes fra før:

```bash
git remote set-url origin https://github.com/Irekaz/DESIGNER.git
git push -u origin main
```

### B) Fra git bundle (Cloud Agent-export)

Last ned [`DESIGNER-initial.bundle`](/opt/cursor/artifacts/DESIGNER-initial.bundle) fra agent-artifacts, deretter:

```bash
git clone DESIGNER-initial.bundle DESIGNER
cd DESIGNER
git remote add origin https://github.com/Irekaz/DESIGNER.git
git push -u origin main
```

### C) SSH

```bash
git remote add origin git@github.com:Irekaz/DESIGNER.git
git push -u origin main
```

## Cloud Agent + secrets

1. Åpne [Cloud Agent Environment](https://cursor.com/dashboard/cloud-agents/environments)
2. Koble miljøet til **`Irekaz/DESIGNER`**
3. Legg inn secrets:
   - `IDEOGRAM_API_KEY`
   - `FASHN_API_KEY`
4. Start **ny Cloud Agent** fra repoet (ikke fortsett gammel chat uten repo)

MCP er konfigurert i [`.cursor/mcp.json`](.cursor/mcp.json).

## Første commit inneholder

- Brand brief + Drop ops (NO + EN)
- Tech packs, RFQ Portugal
- Waitlist (Vite)
- `design/motif/concepts`, `design/mockups/`
- `.cursor/environment.json` (`install`: waitlist `npm ci`)
