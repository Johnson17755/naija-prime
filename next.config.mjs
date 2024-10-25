/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    images: {
      domains: ['res.cloudinary.com', 'www.google.com', 'cdn.pixabay.com', 'buffer.com'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '**',
          port: '',
          pathname: '/da79pzyla/**'
        },
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '/**'
        }
        ]
      }
};

export default nextConfig;

// {
//   protocol: 'https',
//   hostname: 'cdn.pixabay.com',
//   port: '',
//   pathname: '/**'
// },
// {
//   protocol: 'https',
//   hostname: 'buffer.com',
//   port: '',
//   pathname: '/**'
// }