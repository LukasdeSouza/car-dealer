import Link from 'next/link'
import './globals.css'
import { Inria_Sans } from 'next/font/google'

const inria_sans = Inria_Sans({ subsets: ['latin'], weight:['300','400','700'] })

export const metadata = {
  title: 'My Car Viewer - Codetech Software',
  description: 'desenvolvido por Codetech Software, www.codetech.software'
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body className={`${inria_sans.className} bg-black text-white`}>
        {/* <header className='py-6'>
          <nav className='container'>
            <ul className='flex gap-6'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/slides'>Slides</Link>
              </li>
              <li>
                <Link href='/thumbnails'>Thumbnails</Link>
              </li>
              <li>
                <Link href='/controlled'>Controlled</Link>
              </li>
            </ul>
          </nav>
        </header> */}
        <main>
          {children}
          </main>
        <footer></footer>
      </body>
    </html>
  )
}
