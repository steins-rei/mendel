import type { Metadata } from "next";
import { Gloock, Montserrat } from "next/font/google";

import '../styles/global.scss';
import '../styles/tokens.scss';

const gloock = Gloock({
  weight: ['400'],
  variable: "--font-gloock",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mendel',
  description: 'A website created for 10 Mendelssohn',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gloock.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
