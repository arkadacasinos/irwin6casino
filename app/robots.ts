import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://irwin6casino.vercel.app/sitemap.xml',
    host: 'https://irwin6casino.vercel.app',
  }
}

