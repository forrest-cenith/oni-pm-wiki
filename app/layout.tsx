import type { Metadata } from 'next'
import './globals.css'
import { WikiSidebar } from '@/components/wiki-sidebar'

export const metadata: Metadata = {
  title: 'ONI PM Wiki',
  description: 'ONI Program Manager Knowledge Base',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <div className="flex min-h-screen">
          <WikiSidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </body>
    </html>
  )
}
