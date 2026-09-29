// Service worker di HRL Performance Pathways.
//
// Strategia "network-first, solo per la pagina principale": ad ogni
// apertura dell'app prova prima a scaricare l'ultima versione da GitHub
// Pages e la mette in cache; se non c'è connessione, serve l'ultima copia
// salvata. Questo garantisce che chi ha l'app installata (o semplicemente
// il link salvato) veda sempre l'aggiornamento più recente non appena è
// online, senza dover disinstallare o svuotare la cache — e continui a
// poterla aprire anche offline con l'ultima versione scaricata.
//
// Non fa alcun precaching di altre risorse (font Google, script da CDN,
// chiamate a Supabase): quelle seguono il comportamento normale del
// browser, non passano da qui.

const CACHE_NAME = 'hrl-pathways-shell-v1';
const SHELL_URL = 'index.html';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const isShellRequest = req.mode === 'navigate' || req.url.endsWith('/index.html') || req.url.endsWith('/');
  if (!isShellRequest) return; // tutto il resto (font, CDN, Supabase) passa dritto, non gestito qui

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(SHELL_URL, copy));
        return res;
      })
      .catch(() => caches.match(SHELL_URL).then((cached) => cached || Response.error()))
  );
});
