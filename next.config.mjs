/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'preview.cruip.com',
            },
        ],
    },
};

export default nextConfig;
