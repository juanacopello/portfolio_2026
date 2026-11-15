import localFont from 'next/font/local';
import './globals.css';

// 1. Configure Canela (relative to this file, e.g., if fonts are in /public/fonts)
// const canela = localFont({
//   src: '../public/fonts/serif/Canela-Light-Trial.otf',
//   variable: '--font-canela',
//   display: 'swap',
// });

// 2. Configure Archivo
const archivo = localFont({
  src: '../public/fonts/sans-serif-6/Archivo-VariableFont.ttf',
  variable: '--font-archivo',
  display: 'swap',
});

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