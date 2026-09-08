# DESIGNER — Compliance (Norge / EØS)

**Status:** Operativ sjekkliste for Drop 01. Ikke juridisk rådgivning — verifiser med regnskapsfører/advokat før lansering.

## 1. Tekstil-EPR (utvidet produsentansvar)

### Norge
- Miljødirektoratet har foreslått forskrift om EPR for tekstiler (høring 2026).
- **Foreslått ikrafttredelse: 1. januar 2027.**
- Produsenter/importører som gjør klær tilgjengelig i Norge skal typisk:
  - Melde seg inn i **godkjent produsentansvarsselskap**
  - Betale avgift basert på volum satt på markedet
  - Informere forbrukere om bruk, reparasjon, ombruk og avhending

**DESIGNER-handlinger:**
- [ ] Før Drop 01 ship: avklar med regnskapsfører om midlertidig rapporteringsplikt
- [ ] Før 2027: velg PRO (produsentansvarsselskap), f.eks. kartlegg ERP Norway / tilsvarende når listen er klar
- [ ] Bygg materialdata nå (vekt, fibersammensetning, GRS/OEKO-TEX) — samme data trengs til EPR + DPP

### EU (salg til NL/DE/DK m.fl.)
- EU-ramme: tekstil-EPR skal være operative i medlemsland innen **april 2028** (nasjonal implementering).
- Ved salg inn i EU: registrer per marked / via compliance-partner når volum krever det.
- Hold **Digital Product Passport (ESPR)**-klar materialfil per SKU.

### PFAS / kjemikalier
- Drop 01: **PFAS-fri DWR** (allerede i tech packs).
- REACH / OEKO-TEX Standard 100 på stoff.

---

## 2. Pre-order / drop — forbrukerregler (Norge)

Kildebase: angrerettloven + Forbrukertilsynets veileder for nettbutikk.

### Før checkout (opplysningsplikt)
Kunden må få klart:
- Viktigste egenskaper (SKU, farge, størrelse)
- **Totalpris** inkl. MVA og frakt
- At kjøpet er **forhåndsbestilling / pre-order**
- **Leveringsestimat** (f.eks. 8–12 uker etter drop-lukk)
- Vilkår hvis **produksjonsgulv ikke nås** (full refusjon)
- Angrerett-info + lenke til angreskjema

### Bestillingsknapp
- Merk med «**Betal nå**» / «**Kjøp nå**» (ikke bare «Bestill» uten betalingsforpliktelse).
- Kunden må uttrykkelig erkjenne betalingsplikt.

### Leveringstid
- Hvis ikke avtalt: senest 30 dager.  
- **Pre-order med lengre tid må være uttrykkelig avtalt** i checkout (DESIGNER: 8–12 uker).

### Angrerett
- 14 dager, starter **dagen etter varen er mottatt** (ikke ved bestilling).
- Kunden kan også **kansellere før levering** (melding til selger).
- Etter mottak: retur innen frist; selger refunderer; avklar hvem som betaler returfrakt (opplys før kjøp).
- Unntak for skreddersøm/individuell tilvirkning gjelder **ikke** vanlige størrelser XS–XXL i drop.

### Kansellering hvis gulv ikke nås
- Kommuniser i vilkår + checkout.
- Full refusjon innen X bankdager (anbefal ≤14).
- Ingen produksjon start før gulv er dokumentert.

### Etter kjøp
- Send avtalebekreftelse på e-post (varig medium) med alle opplysninger + **angreskjema**.
- Oppdater kjøpere ved produksjonsstart og shipping.

---

## 3. Checkout / vilkår — tekstmal (utkast)

> This is a limited pre-order for DESIGNER Drop 01. Production starts only if the minimum production floor is met. Estimated delivery: 8–12 weeks after the drop closes. If the floor is not met, you receive a full refund. You have a 14-day right of withdrawal from the day after you receive the goods (Norwegian Cancellation Act). You may also cancel before delivery by contacting us.

Norsk speilversjon skal ligge i salgsvilkår for .no-kunder.

---

## 4. MVA (kort)
- Norsk selskap + salg i Norge: vanlig MVA-registrering ved terskel (50 000 NOK / 12 mnd).
- Salg til EU: egen VAT/OSS-vurdering (Norge ≠ EU-momsområde).

---

## 5. Sjekkliste før Drop 01 åpner
- [ ] Salgsvilkår + personvern + cookies på site
- [ ] Angreskjema klart (Forbrukertilsynet-mal)
- [ ] Checkout viser pre-order + leveringsestimat + gulv/refusjon
- [ ] Knapp: «Betal nå»
- [ ] E-postbekreftelse med angreinfo
- [ ] Materialark per SKU (EPR/DPP-klar)
- [ ] PFAS-fri DWR bekreftet i sample-PO
