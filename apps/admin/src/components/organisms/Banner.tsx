import SiteConfig from '@/config/site';
import { BannerTitle } from '@/components/molecules';

const Banner = () => {
   return (
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 text-center sm:px-6 lg:px-8">
         <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight sm:mt-6">
            Welcome to
            <span className="border-b border-dotted border-slate-300 px-3">
               {SiteConfig.name}
            </span>
         </p>

         <BannerTitle />

         <p className="mx-auto mt-9 inline-block max-w-2xl text-lg tracking-tight sm:mt-6">
            Explore the Nexca ecosystem and discover tools to elevate your
            workflow and achieve even more. Start now and unlock the potential
            of seamless content management!
         </p>
      </div>
   );
};

export default Banner;
