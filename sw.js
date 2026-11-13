const CACHE='impulso-v72-propulsao';
const ASSETS=['./','./index.html','./styles.css?v=72','./theme-impulso.css?v=72','./theme-impulso-analogo.css?v=72','./theme-impulso-triadico.css?v=72','./theme-impulso-granfino.css?v=72','./theme-impulso-ecologico.css?v=72','./theme-impulso-mistico.css?v=72','./app.js?v=72','./manifest.json?v=13','./rocket-192-v11.png','./rocket-512-v11.png','./logo.svg','./logo.png','./habitos_elixires_v2.json','./ImpulsoVision.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('impulso-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const req=e.request;if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
 if(req.mode==='navigate'){e.respondWith(fetch(req).catch(()=>caches.match('./index.html')));return;}
 e.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res})));
});
