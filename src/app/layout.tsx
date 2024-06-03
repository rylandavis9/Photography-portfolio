import Link from 'next/link';
import { Sidebar } from './sidebar/sidebar';
import './globals.css'

export const metadata = {
  title: 'Rylan Davis Photography',
  description: 'Photos by Rylan Davis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en">
      <body>
        <main>
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  )
}