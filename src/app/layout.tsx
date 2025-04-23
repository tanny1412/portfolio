
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DataSci Portfolio',
  description: 'A data science personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-background border-b border-border">
          <div className="container mx-auto py-4 px-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">DataSci Portfolio</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="#about" className="hover:text-primary">About</Link></li>
                <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
                <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-background border-t border-border py-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
