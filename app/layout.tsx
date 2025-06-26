import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Ninjas - Coming Soon",
  description:
    "Something extraordinary is coming for frontend developers. Get ready to level up your coding skills like a true ninja.",
  keywords: "frontend, development, react, nextjs, typescript, coding, programming",
  authors: [{ name: "Frontend Ninjas" }],
  openGraph: {
    title: "Frontend Ninjas - Coming Soon",
    description: "Something extraordinary is coming for frontend developers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Ninjas - Coming Soon",
    description: "Something extraordinary is coming for frontend developers.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
