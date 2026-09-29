# HRL Performance Pathways — pubblicazione su GitHub Pages

Questa cartella contiene tutto il necessario per pubblicare l'app come webapp
raggiungibile da un unico link, aggiornabile in qualsiasi momento.

## Struttura

- `index.html` — l'app (stesso file che uso io per svilupparla, solo rinominato)
- `manifest.json` — rende l'app installabile (icona sulla home/desktop)
- `sw.js` — service worker: ogni apertura scarica prima la versione più
  recente da internet; usa la copia salvata solo se non c'è connessione.
  Così chi ha l'app installata vede sempre l'ultimo aggiornamento appena è
  online, senza dover disinstallare o pulire nulla.
- `icons/` — icone dell'app (logo HRL) nelle dimensioni richieste
- `favicon.ico` — icona nella scheda del browser

## Primo caricamento su GitHub

1. Crea un nuovo repository su GitHub (può essere privato).
2. Carica dentro **tutti** i file e cartelle qui presenti, mantenendo la
   stessa struttura (in particolare `icons/` deve restare una sottocartella,
   non i file sciolti).
3. Vai su **Settings → Pages** del repository.
4. In "Source" scegli il branch (es. `main`) e la cartella `/ (root)`.
5. Salva: dopo circa un minuto GitHub mostra l'indirizzo pubblico, del tipo
   `https://<tuo-utente>.github.io/<nome-repo>/`.

Quell'indirizzo è il link da dare ai collaboratori. Ognuno si logga con le
proprie credenziali (l'autenticazione e tutti i dati passano già da
Supabase, non dal file).

## Come pubblico i prossimi aggiornamenti

Ogni volta che ti mando una nuova versione di `index.html`:

1. Sostituisci il file `index.html` nel repository (stesso nome, stesso
   percorso — non serve toccare `manifest.json`, `sw.js` o `icons/` a meno
   che non te lo segnali esplicitamente io).
2. Fai commit/push della modifica.
3. GitHub Pages ripubblica da solo in circa un minuto. I collaboratori
   vedranno la nuova versione al primo refresh (o alla prossima apertura,
   se l'hanno installata come app).

## Installazione come app (facoltativo, per i collaboratori)

- **Su desktop (Chrome/Edge)**: aprendo il link compare un'icona di
  installazione nella barra degli indirizzi ("Installa app").
- **Su Android (Chrome)**: menu → "Aggiungi a schermata Home".
- **Su iPhone/iPad (Safari)**: pulsante Condividi → "Aggiungi a Home".

In tutti i casi si apre come un'app a schermo intero, con l'icona HRL, ma
resta comunque collegata allo stesso link — quindi si aggiorna da sola.

## Nota sul dominio personalizzato

Se in futuro vuoi un indirizzo tipo `app.tuodominio.it` invece del link
`github.io`, si può collegare un dominio personalizzato dalle stesse
impostazioni "Pages" del repository — basta dirmelo e ti preparo anche
quel passaggio.
