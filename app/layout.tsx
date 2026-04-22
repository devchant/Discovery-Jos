import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
};
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LoaderProvider } from '@/components/loader-provider'
import { PageLoader } from '@/components/page-loader'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Discover Jos | Jos Tourism & Lifestyle Guide',
  description: 'Explore Jos and Plateau State with Timothy Kunat. Discover authentic tours, cultural experiences, food adventures, and exclusive community memberships.',
  keywords: 'Jos tourism, Plateau State tours, travel guide, Nigerian culture, food tours',
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png ',
        type: 'image/png',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased text-foreground">
        <LoaderProvider>
          <PageLoader />
          {children}
        </LoaderProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
