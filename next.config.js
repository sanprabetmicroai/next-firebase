/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Images must be handled differently in static exports
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig