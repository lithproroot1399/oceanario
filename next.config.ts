/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ATENÇÃO: Isto permite que o build termine com sucesso mesmo com erros de TypeScript.
    ignoreBuildErrors: true,
  },
}

export default nextConfig
