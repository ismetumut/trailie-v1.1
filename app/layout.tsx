import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Career Discovery - Kariyer Keşfi',
  description: 'Discover your career path with AI-powered assessments and simulations',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}

// Admin layout (for /admin route)
export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-accent font-sans">
      <aside className="w-56 bg-primary text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-8">Trailie Admin</div>
        <nav className="flex flex-col gap-4">
          <a href="/admin/overview" className="hover:underline">Analytics Overview</a>
          <a href="/admin" className="hover:underline">Dashboard</a>
          <a href="/admin/candidates" className="hover:underline">Candidates</a>
          <a href="/admin/filters" className="hover:underline">Filters</a>
          <a href="/admin/export" className="hover:underline">Export</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-accent min-h-screen">
        {children}
      </main>
    </div>
  )
}
