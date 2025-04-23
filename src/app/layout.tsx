
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
  title: 'Tanish Kandivlikar | Data Science Portfolio',
  description: "Tanish Kandivlikar's personal data science portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-background border-b border-border sticky top-0 z-50">
          <div className="container mx-auto py-4 px-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold transition-colors hover:text-primary">Tanish Kandivlikar</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-background border-t border-border py-6 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Tanish Kandivlikar. All rights reserved.
            </p>
        </footer>
      </body>
    </html>
  );
}
