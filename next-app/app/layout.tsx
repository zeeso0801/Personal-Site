import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Austin Eubank',
  description: 'Personal website for Austin Eubank',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 text-gray-900 min-h-screen flex flex-col`}>
        <header className="bg-white/70 backdrop-blur sticky top-0 z-10 shadow-sm">
          <nav className="max-w-3xl mx-auto flex gap-6 p-4 font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/work-experience" className="hover:underline">Work Experience</Link>
            <Link href="/fsae" className="hover:underline">FSAE</Link>
            <Link href="/photo-gallery" className="hover:underline">Photo Gallery</Link>
          </nav>
        </header>
        <main className="flex-1 max-w-3xl mx-auto p-4 sm:p-8">{children}</main>
        <footer className="bg-white/70 backdrop-blur mt-8 p-4 text-center text-sm shadow-inner">
          <p>Phone: +1-662-296-7800</p>
          <p>Email: <a className="text-blue-600 hover:underline" href="mailto:austin.eubank01@gmail.com">austin.eubank01@gmail.com</a></p>
          <p>LinkedIn: <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/austin-r-e/">@austin-r-e</a></p>
        </footer>
      </body>
    </html>
  );
}
