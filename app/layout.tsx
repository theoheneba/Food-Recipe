import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/layout/site-header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Culinary Canvas | Find and Save Your Favorite Recipes',
  description: 'Discover, save, and organize your favorite recipes with Culinary Canvas.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://culinary-canvas.com/',
    siteName: 'Culinary Canvas',
    title: 'Culinary Canvas | Find and Save Your Favorite Recipes',
    description: 'Discover, save, and organize your favorite recipes with Culinary Canvas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culinary Canvas',
    description: 'Discover, save, and organize your favorite recipes with Culinary Canvas.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 bg-background">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}