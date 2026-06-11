const CACHE_NAME = 'mept-cache-v1';

// ======================== INSTALL ========================
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    // Skip waiting - force new service worker to activate immediately
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Service Worker: Caching files');
            return cache.addAll([
                '/MEPT/index.html',
                '/MEPT/style.css',
                '/MEPT/script.js',
                '/MEPT/manifest.json',
                '/MEPT/icon-192.png',
                '/MEPT/icon-512.png'
            ]);
        })
    );
});

// ======================== ACTIVATE ========================
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Take control of all pages immediately
            return self.clients.claim();
        })
    );
});

// ======================== FETCH (Network First - Auto Update) ========================
self.addEventListener('fetch', (event) => {
    // For HTML files - Network First (always get latest)
    if (event.request.url.endsWith('.html') || event.request.url.endsWith('/')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Update cache with new version
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    // Offline - use cache
                    return caches.match(event.request);
                })
        );
    }
    // For CSS, JS files - Network First
    else if (event.request.url.endsWith('.css') || event.request.url.endsWith('.js')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
    }
    // For audio files - Network First with cache fallback
    else if (event.request.url.endsWith('.mp3')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
    }
    // For images and other assets - Cache First (faster loading)
    else {
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    return cachedResponse || fetch(event.request).then((response) => {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                        return response;
                    });
                })
        );
    }
});

// ======================== AUTO UPDATE MESSAGE ========================
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
