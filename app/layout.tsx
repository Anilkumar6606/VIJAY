import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Agathamudi Vijay Kumar - MBA Finance & Digital Marketing Expert',
  description: 'Explore the professional portfolio of Agathamudi Vijay Kumar - MBA student specializing in digital marketing, sales strategy, Meta Ads, Google Ads, and business growth. View experience, skills, and projects.',
  keywords: ['MBA', 'Digital Marketing', 'Sales Strategy', 'Meta Ads', 'Google Ads', 'Finance', 'Marketing', 'Ad Tech', 'Business Growth', 'Strategic Planning'],
  generator: 'v0.app',
  authors: [{ name: 'Agathamudi Vijay Kumar' }],
  creator: 'Agathamudi Vijay Kumar',
  metadataBase: new URL('https://vijayakumar.netlify.app'),
  alternates: {
    canonical: 'https://vijayakumar.netlify.app',
  },
  openGraph: {
    title: 'Agathamudi Vijay Kumar - MBA Finance & Digital Marketing Expert',
    description: 'Professional portfolio showcasing expertise in digital marketing, sales, and business strategy.',
    url: 'https://vijayakumar.netlify.app',
    siteName: 'Vijay Kumar Portfolio',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Vijay Kumar Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agathamudi Vijay Kumar - MBA Finance & Digital Marketing Expert',
    description: 'Explore my professional portfolio and expertise.',
  },
  robots: {
    index: true,
    follow: true,
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
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
