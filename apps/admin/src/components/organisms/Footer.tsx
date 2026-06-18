import { Container, SiteNameLink } from '@/components/atoms';
import SiteConfig from '@/config/site';
import CopyRight from './CopyRight';
import EmailListForm from './EmailListForm';
import FooterLinks from './FooterLinks';
import FooterMedia from './FooterMedia';

const Footer = () => {
   return (
      <>
         <footer className="w-full border-t-2 border-indigo-600">
            <Container>
               <div className="grid grid-cols-12 gap-x-5 gap-y-3 py-6">
                  <div className="relative col-span-full hidden xl:flex h-96 flex-col items-center justify-center gap-12 rounded-2xl border-2 border-indigo-600 bg-base-100 p-6 shadow-xl md:col-span-6 xl:col-span-3 xl:w-72">
                     <SiteNameLink />
                     <p className="text-center">{SiteConfig.slogan}</p>
                     <FooterMedia />
                  </div>
                  <FooterLinks />
                  <div className="col-span-full justify-center block  xl:col-span-3 xl:py-16">
                     <p className="lg:mb-9 mb-4 text-center text-lg font-bold xl:text-left">
                        Email List
                     </p>
                     <EmailListForm />
                  </div>
               </div>
            </Container>
            <CopyRight siteName={SiteConfig.name} />
         </footer>
      </>
   );
};

export default Footer;
