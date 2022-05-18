var filesToCache = [
  "/" ,
  "/style.css" ,
  "/script.js" ,
  "/li.js" ,
  "/jquery-min.js" ,
  "/smoothscroll.js" ,
  "/aos.css" ,
  "/aos.js" ,
  "/sw.js" ,
  "/manifest.webmanifest" ,
  "/Assets/" ,
  "/Assets/dance.gif" ,
  "/Assets/folontilo.gif" ,
  "/Assets/tap.gif" ,
  "/Assets/Montserrat/" ,
  "/Assets/Montserrat/Montserrat-Bold.ttf" ,
  "/Assets/Montserrat/Montserrat-SemiBold.ttf" ,
  "/Assets/Montserrat/Montserrat-ExtraBold.ttf" ,
  "/Assets/Montserrat/Montserrat-Light.ttf" ,
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
]

// On install - caching the application shell
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
        .open('sw-cache-dau-buoi')
        .then(cache => {
            return cache.addAll(filesToCache);
        })
        .catch(err => console.log(err))
  );
});

// async function requestBackgroundSync() {
//     await self.registration.sync.register('fetch-cps');
// }
// // Background sync?
// self.addEventListener('sync', function() {
//     self.cache.open('sw-cache-dau-buoi').then(cache => {
//         cache.put(request, response)
//     })
// })

// On network request
self.addEventListener("fetch", event => {
  if (event.request.url === "https://ditmenavi.xyz") {
      // or whatever your app's URL is
      event.respondWith(
          fetch(event.request).catch(err =>
              self.cache.open('sw-cache-dau-buoi').then(cache => cache.match("/index.html"))
          )
      );
  } else {
      event.respondWith(
          fetch(event.request).catch(err =>
              caches.match(event.request).then(response => response)
          )
      );
  }
});
