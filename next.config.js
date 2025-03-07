const optimizedImages = require('next-optimized-images');

const withPWA = require('next-pwa')({
  dest: 'public',
  cacheOnFrontEndNav: true,
  additionalManifestEntries: true,
  reloadOnOnline: true,
  
})

module.exports = withPWA(optimizedImages({
  images: {
    disableStaticImages: true,
    domains: ['images.unsplash.com'],
  }
}));
