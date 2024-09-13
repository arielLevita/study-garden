module.exports = {
    globDirectory: 'dist/', // Directory where your app will be built
    globPatterns: [
        '**/*.{html,js,css,png,jpg,svg,json}'
    ],
    swDest: 'dist/sw.js', // The destination and name of your service worker file
    runtimeCaching: [
        {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst', // First tries the network, then falls back to cache
            options: {
                cacheName: 'html-cache',
            },
        },
        {
            urlPattern: ({ request }) => request.destination === 'script',
            handler: 'StaleWhileRevalidate', // Serve cached version and revalidate in the background
            options: {
                cacheName: 'js-cache',
            },
        },
        {
            urlPattern: ({ request }) => request.destination === 'style',
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'css-cache',
            },
        },
        {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst', // Images are cached to improve performance
            options: {
                cacheName: 'image-cache',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // Cache images for 30 days
                },
            },
        },
    ],
};
