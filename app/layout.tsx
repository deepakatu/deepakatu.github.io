
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deepak Manoharan - Senior Data Scientist & AI/ML Engineer',
  description: 'Professional portfolio of Deepak Manoharan - 9+ years experience in Data Science, AI/ML, and Analytics. Specializing in Generative AI, LLMs, Python, AWS, and MLOps.',
  keywords: 'Data Scientist, AI Engineer, Machine Learning, Python, AWS, MLOps, Generative AI, Auckland, New Zealand',
  authors: [{ name: 'Deepak Manoharan' }],
  openGraph: {
    title: 'Deepak Manoharan - Senior Data Scientist & AI/ML Engineer',
    description: '9+ years experience in Data Science, AI/ML, and Analytics',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon for browser tab */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4TZ6XNXNJK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4TZ6XNXNJK');
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
