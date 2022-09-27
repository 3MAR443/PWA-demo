importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.NetworkFirst({
        cacheName: 'images'
    })
);
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script',
    new workbox.strategies.NetworkFirst(
        { cacheName: 'script' }
    )
)
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'style',
    new workbox.strategies.NetworkFirst()
)


