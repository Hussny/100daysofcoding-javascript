const cacheName='v1';

const cacheAssets = [
    'index.html',
    'manifest.webmanifest',
    'static/styles.css',
    'static/scripts.js',
    'app.js'
]

// CALL INSTALL EVENT 
self.addEventListener('install', e => {
    console.log('Service Worker:Installed');

    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('Service Worker: Caching Files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
});

// CALL ACTIVATE EVENT
self.addEventListener('activate', e => {
    console.log('Service Worker:Activated');
    //REMOVE UNWANTED CACHES
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !==cacheName) {
                        console.log('Service Worker: Clearing Old Caches');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

// SHOW CACHE FILES IN OFFLINE
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});