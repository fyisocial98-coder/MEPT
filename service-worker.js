const CACHE_NAME = 'mept-v1';
const ASSETS = [
  '/MEPT/index.html',
  '/MEPT/style.css',
  '/MEPT/script.js',
  '/MEPT/manifest.json',
  '/MEPT/icon-192.png',
  '/MEPT/icon-512.png'
  // Audio files will be cached on demand
];

// Install event – pre-cache essential assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Pre-caching essential files');
      return cache.addAll(ASSETS);
    })
  );
});

// Activate event – clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// Fetch event – network first with cache fallback for audio; cache first for others
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Audio files: network first, fallback to cache
  if (url.pathname.endsWith('.mp3')) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // Clone and store in cache
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // For all other requests: cache first, fallback to network
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => cachedResponse || fetch(event.request))
    );
  }
});
