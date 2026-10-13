const CACHE='classroom-noise-meter-v3';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./fonts/baloo-2-latin-500-normal.woff2','./fonts/baloo-2-latin-700-normal.woff2','./fonts/baloo-2-latin-800-normal.woff2','./fonts/cinzel-latin-600-normal.woff2','./fonts/cinzel-latin-800-normal.woff2','./fonts/quicksand-latin-500-normal.woff2','./fonts/quicksand-latin-600-normal.woff2','./fonts/quicksand-latin-700-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.hostname.includes('googletagmanager')||u.hostname.includes('google-analytics'))return; // never cache analytics
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html'))));
});
