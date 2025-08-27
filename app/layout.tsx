import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
import { ThemeProvider } from "@/components/ui/theme-provider"
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: '#09090b',
}

export const metadata: Metadata = {
  title: "FrontendNinjas",
  description:
    "Join Frontend Ninjas — a new hub for frontend developers to level up their React, Next.js, and TypeScript skills with real-world projects.",
  keywords: [
    "frontend",
    "web development",
    "react",
    "nextjs",
    "typescript",
    "javascript",
    "programming",
    "coding",
    "open source",
    "frontend ninjas",
  ],
  authors: [{ name: "Sumangal karan", url: "https://frontedninjas.netlify.app/" }],
  creator: "FrontendNinjas",
  publisher: "FrontendNinjas",
  metadataBase: new URL("https://frontedninjas.netlify.app/"),
  openGraph: {
    title: "FrontendNinjas",
    description:
      "Frontend Ninjas is launching soon. Learn frontend development the smart way — with real projects, open source, and a vibrant community.",
    url: "https://frontedninjas.netlify.app/",
    siteName: "FrontendNinjas",
    images: [
      {
        url: "https://frontedninjas.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "FrontendNinjas",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Ninjas — Coming Soon",
    description:
      "Level up your frontend skills with the upcoming launch of Frontend Ninjas — a community for developers, by developers.",
    images: ["https://frontedninjas.netlify.app/og-image.png"],
    creator: "@frontendninjas",
  },
  category: "technology",
  themeColor: "#09090b", // tailwind slate-900 (dark background)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>   
                <SmoothCursor />
          
             </body>
    </html>
  )
}
