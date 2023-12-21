import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata = {
  title: 'Metaverse',
  description: 'Metaverse madeness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-primary-black overflow-x-hidden'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
