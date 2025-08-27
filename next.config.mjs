const nextConfig = {
  output: 'export', // Required for static export
  trailingSlash: true, // Helps with GitHub Pages routing
  images: {
    unoptimized: true // Required for static export
  },
  // Add basePath if deploying to project site (username.github.io/repo-name)
  basePath: process.env.NODE_ENV === 'production' ? '/AgriConnect' : '',
  // Add assetPrefix for proper asset loading
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AgriConnect/' : '',
}

export default nextConfig
