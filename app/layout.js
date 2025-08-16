import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "is-a.software - Claim Your Sleek New Subdomain",
  description: "Claim your sleek new .is-a.software subdomain and stand out in the digital world. Get your own yourname.is-a.software subdomain with instant setup, enterprise security, and full customization.",
  keywords: "subdomain, domain, software, developer tools, web hosting, custom domains, is-a.software",
  authors: [{ name: "is-a.software" }],
  creator: "is-a.software",
  publisher: "is-a.software",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://is-a.software'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "is-a.software - Claim Your Sleek New Subdomain",
    description: "Claim your sleek new .is-a.software subdomain and stand out in the digital world.",
    url: 'https://is-a.software',
    siteName: 'is-a.software',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'is-a.software - Subdomain Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "is-a.software - Claim Your Sleek New Subdomain",
    description: "Claim your sleek new .is-a.software subdomain and stand out in the digital world.",
    images: ['/hero.png'],
    creator: '@is_a_software',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
