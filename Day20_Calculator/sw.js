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
});