import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope, Outfit } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Swakaaya Wellness Clinic",
  description:
    "At Swakaaya Wellness Clinic, we provide modern, non-surgical treatments designed to deliver visible, long-lasting results with safety and comfort.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" }, 
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} ${outfit.variable} antialiased`}>
      <head>
        {/* Google Ads Base Script */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-11083818088"
          strategy="afterInteractive"
        />
        <Script id="google-ads-initialization" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11083818088');
          `}
        </Script>
        
        {/* Google Ads Phone Conversion Tracking */}
        <Script id="google-ads-phone-conversion" strategy="afterInteractive">
          {`
            gtag('config', 'AW-11083818088/efrcCMbTysobEOjIlqUp', {
              'phone_conversion_number': '088268 15442'
            });
          `}
        </Script>
      </head>
      <body className="font-outfit">
        {children}
      </body>
    </html>
  )
}