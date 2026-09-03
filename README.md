# LaPiacentino Website

LaPiacentino Website è un sito aziendale responsive sviluppato con React. Il progetto comprende una landing page focalizzata sulla richiesta di preventivi assicurativi via WhatsApp e un sito multipagina dedicato alla presentazione di servizi, contenuti e attività di networking.

La modalità visualizzata può essere controllata tramite una variabile ambiente, permettendo di pubblicare temporaneamente la sola landing page senza eliminare le altre sezioni.

- [Demo online](https://la-piacentino-web-site.vercel.app/)
- [Repository GitHub](https://github.com/GFrenk016/LaPiacentino_WebSite)

## Modalità disponibili

### Landing preventivi

È la modalità attiva per impostazione predefinita. Presenta:

- proposta di preventivi assicurativi in 24/48 ore;
- call to action verso WhatsApp;
- spiegazione del processo in tre passaggi;
- panoramica delle coperture disponibili;
- layout minimale con logo e informazioni aziendali;
- animazioni durante lo scorrimento;
- design responsive.

Le coperture presentate includono RC Auto, Kasko, furto e incendio, assistenza stradale e tutela legale.

### Sito completo

Disattivando la modalità landing vengono abilitate le sezioni:

- homepage aziendale;
- servizi;
- chi siamo;
- contatti;
- blog;
- networking;
- preventivi.

Questa parte del progetto presenta contenuti orientati a servizi di carriera, supporto alle candidature e costruzione di relazioni professionali.

## Funzionalità

- Routing client-side
- Menu desktop e mobile
- Header sticky
- Layout responsive
- Animazioni di ingresso e scorrimento
- Slider automatico per le immagini di sfondo
- Catalogo dei servizi con sezioni interne
- Blog statico con ricerca e filtro per categoria
- Carosello responsive nella sezione networking
- Form contatti dimostrativo
- Collegamenti email e telefono
- Call to action WhatsApp con messaggio precompilato
- Modalità manutenzione configurabile
- Redirect automatico verso la landing quando il sito completo è disattivato

## Stack tecnologico

| Tecnologia | Utilizzo |
| --- | --- |
| React 19 | Interfaccia a componenti |
| Vite 7 | Ambiente di sviluppo e build |
| React Router | Routing client-side |
| Tailwind CSS 4 | Layout e styling responsive |
| Framer Motion | Animazioni e transizioni |
| Swiper | Caroselli responsive |
| React Icons | Iconografia |
| Vercel | Hosting e gestione delle rotte SPA |

## Architettura

```text
src/
├── assets/            # Logo e risorse locali
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── BackgroundSlider.jsx
├── layout/
│   └── Layout.jsx
├── pages/
│   ├── homepage/
│   ├── servizi/
│   ├── chisiamo/
│   ├── contatti/
│   ├── blog/
│   ├── networking/
│   └── preventivo/
├── routes/
│   └── Routing.jsx
├── App.jsx
└── main.jsx
```

## Pagine e rotte

| Rotta | Contenuto |
| --- | --- |
| `/` | Homepage oppure landing preventivi |
| `/servizi` | Orientamento, CV, colloqui e supporto pratico |
| `/chi-siamo` | Missione, metodo e community |
| `/contatti` | Form dimostrativo e recapiti |
| `/blog` | Articoli statici ricercabili e filtrabili |
| `/networking` | Percorso e contenuti dedicati al networking |
| `/preventivo` | Landing per preventivi assicurativi |

Quando la modalità manutenzione è attiva, qualsiasi percorso viene reindirizzato alla landing `/`.

## Configurazione

Copia il file di esempio:

```bash
cp .env.example .env
```

Su Windows è possibile creare manualmente `.env` partendo da `.env.example`.

```env
VITE_MAINTENANCE_MODE=true
```

Valori disponibili:

| Valore | Comportamento |
| --- | --- |
| `true` | Mostra esclusivamente la landing preventivi |
| `false` | Abilita l’intero sito multipagina |
| non definito | La landing rimane attiva per impostazione predefinita |

La variabile viene letta durante la build. Dopo una modifica è quindi necessario eseguire nuovamente build e deploy.

## Configurazione WhatsApp

Il numero e il messaggio iniziale si trovano in:

```text
src/pages/preventivo/index.jsx
```

Prima della pubblicazione occorre sostituire:

```js
const WHATSAPP_NUMERO = "NUMERO_PLACEHOLDER";
const WHATSAPP_MESSAGGIO =
  "MESSAGGIO_PLACEHOLDER - Ciao, vorrei richiedere un preventivo assicurativo.";
```

Il numero deve includere il prefisso internazionale senza `+` e senza spazi.

## Installazione

Requisiti:

- Node.js 20 o versione successiva
- npm

```bash
git clone https://github.com/GFrenk016/LaPiacentino_WebSite.git
cd LaPiacentino_WebSite
npm install
npm run dev
```

## Script disponibili

```bash
npm run dev      # Avvia il server di sviluppo
npm run build    # Genera la build di produzione
npm run preview  # Mostra un'anteprima della build
npm run lint     # Esegue ESLint
```

## Deploy

Il file `vercel.json` contiene una regola di fallback verso `index.html`, necessaria per permettere a React Router di gestire correttamente le rotte quando una pagina viene aperta o ricaricata direttamente.

Prima del deploy su Vercel è necessario configurare `VITE_MAINTENANCE_MODE` nelle variabili ambiente del progetto.

## API e persistenza

Il progetto non utilizza attualmente:

- backend;
- database;
- autenticazione;
- API applicative;
- CMS;
- invio reale del form contatti.

Gli articoli e gli altri contenuti sono definiti localmente nel frontend. Il form contatti mostra soltanto un messaggio dimostrativo, mentre la landing delega il contatto a WhatsApp.

Alcune immagini provengono da Picsum e vengono utilizzate come contenuti placeholder.

## Aspetti tecnici rilevanti

- Modalità di pubblicazione controllata tramite environment variable
- Conservazione delle rotte complete durante la fase di landing
- Redirect centralizzato
- Componenti condivisi e layout riutilizzabile
- Animazioni dichiarative con Framer Motion
- Filtri client-side con stato derivato e memoizzazione
- Caroselli responsive con Swiper
- Configurazione SPA per il deploy su Vercel
- Navigazione adattiva desktop/mobile

## Stato del progetto

La build di produzione viene completata correttamente.

Il sito contiene ancora elementi dimostrativi da sostituire prima della pubblicazione definitiva:

- numero e messaggio WhatsApp;
- dati societari e iscrizione RUI;
- numero di telefono;
- link social;
- immagini Picsum;
- invio reale del form contatti;
- pagine di dettaglio degli articoli;
- alcuni testi descrittivi.

Il controllo ESLint richiede inoltre una rifinitura: sono presenti import segnalati come inutilizzati, una dipendenza mancante nel timer dello slider e una generazione casuale dell’immagine eseguita durante il rendering.

Le aree assicurativa e career/networking rappresentano al momento due direzioni editoriali differenti; prima del rilascio completo è consigliabile uniformare il posizionamento del brand.

## Sviluppi futuri

- Integrazione del form con un servizio email o un backend
- CMS per articoli e contenuti aziendali
- Pagine dinamiche per i singoli articoli
- Gestione dei preventivi attraverso un’area riservata
- Sostituzione dei placeholder con dati e asset definitivi
- SEO e metadati specifici per ogni pagina
- Cookie banner, privacy policy e gestione del consenso
- Test automatici dei flussi principali

## Autore

Sviluppato da [Francesco Guccione](https://github.com/GFrenk016).
