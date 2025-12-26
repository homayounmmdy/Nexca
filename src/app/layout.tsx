import { SkipToMain } from '@/components/atoms';
import { Footer, Header } from '@/components/organisms';
import MainProvider from '@/providers/MainProvider';
import { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import './globals.css';
import PWAInstallThankYou from '@/components/organisms/PWAInstallThankYou';

const libre_Franklin = Libre_Franklin({ subsets: ['latin'] });

export const metadata: Metadata = {
   verification: {
      google: 'gTVvXWgVqXKU6AfSRkuQa4O39VGzRS9zcA4y9eT3uUo',
   },
};
export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <MainProvider>
         <html lang="en" data-theme="light">
            <body className={libre_Franklin.className}>
               <SkipToMain />
               <PWAInstallThankYou />
               <Header />
               <main id="main" className="mt-[80px]">
                  {children}
               </main>
               {/* <PWAInstallPopup /> */}
               <Footer />
            </body>
         </html>
      </MainProvider>
   );
}
