import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';

// 2. Configure Archivo
const archivo = localFont({
  src: '../public/fonts/sans-serif-6/Archivo-VariableFont.ttf',
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Hola! I'm Juana :)",
    template: '%s | Juana Copello',
  },
  description: 'Portfolio of Juana Copello',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}