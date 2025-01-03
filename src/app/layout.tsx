'use client'; // * Important: This not change render type on Pages

import { roboto, robotoItalic } from '@/config/fonts';
import '@/styles/globals.scss';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={`${roboto.variable} ${robotoItalic.variable}`}>{children}</body>
    </html>
  );
}
