import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1 className="text-5xl text-center p-12 pt-0">Next Bookmark</h1>
          <nav className="flex justify-center gap-4">
            <a href="/" className="text-xl text-violet-500 hover:text-violet-400">Home</a>
            <a href="/new" className="text-xl text-violet-500 hover:text-violet-400">New</a>
          </nav>

        </header>
        {children}
      </body>
    </html>
  )
}
