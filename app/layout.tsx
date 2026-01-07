import type React from "react"
import type { Metadata } from "next"
import { Capriola, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "./providers"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const _capriola = Capriola({ weight: "400", subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AquaWave - Premium Aquarium Shop in Sonarpur, Kolkata",
  description:
    "Discover premium aquariums, fish, and aquatic supplies at AquaWave. Located in Sonarpur, Kolkata. Call +917278404766 for orders and inquiries.",
  keywords: "aquarium shop, fish store, aquatic supplies, Sonarpur Kolkata, premium fish",
  metadataBase: new URL("https://aquawave-shop.com"),
  openGraph: {
    title: "AquaWave - Premium Aquarium Shop",
    description: "Your trusted aquarium shop in Sonarpur, Kolkata",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_capriola.className} antialiased`}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
