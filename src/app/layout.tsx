// import localFont from 'next/font/local';
import './assets/style/global.scss';

import { NextUIProvider } from '@nextui-org/system';
import type { Metadata } from 'next';

import Alert from './components/alert';
import Modal from './components/modal';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Bioli.ink',
  description: '聚合你的所有信息',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className='antialiased'
          >
          <NextUIProvider>
            {children}
            
            <Modal />
            <Alert />
          </NextUIProvider>
        </body>
    </html>
  );
}
