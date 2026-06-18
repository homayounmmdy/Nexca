import { Container } from '@/components/atoms';
import { CTABtn } from '@/components/molecules';
import Image from 'next/image';

const RouteConfig = {
   admin: {
      base: '/admin',
   },
};

// User avatar data with placeholder images
const users = [
   { id: 1, delay: '0ms' },
   { id: 2, delay: '200ms' },
   { id: 3, delay: '400ms' },
   { id: 4, delay: '600ms' },
   { id: 5, delay: '800ms' },
];

function CTA() {
   return (
      <section className="relative w-full flex items-center justify-center overflow-hidden mt-9">
         {/* Animated background with glassmorphism */}

         {/* Main content */}
         <Container className="relative z-10">
            <div className="text-center space-y-4">
               <div className="inline-flex items-end justify-center w-full text-center mx-auto">
                  <Image
                     src="https://avatar.iran.liara.run/public/9"
                     width={48}
                     height={48}
                     alt=""
                     className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-indigo-600"
                  />
                  <Image
                     src="https://avatar.iran.liara.run/public/64"
                     width={48}
                     height={48}
                     alt=""
                     className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-indigo-600"
                  />
                  <Image
                     src="https://avatar.iran.liara.run/public/13"
                     width={48}
                     height={48}
                     alt=""
                     className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-indigo-600"
                  />
                  <Image
                     src="https://avatar.iran.liara.run/public/60"
                     width={48}
                     height={48}
                     alt=""
                     className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-indigo-600"
                  />
                  <Image
                     src="https://avatar.iran.liara.run/public/15"
                     width={48}
                     height={48}
                     alt=""
                     className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-indigo-600 relative"
                  />
               </div>
               {/* Main heading with text animations */}
               <div className="animate-fade-in-up animation-delay-400">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight">
                     <span className="block bg-gradient-to-r from-base-100 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                        Discover your
                     </span>
                     <span className="block relative mt-2">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                           potential
                        </span>
                        <span className="relative inline-block ml-4">
                           {/* Animated underline */}
                           <svg
                              className="absolute bottom-2 left-0 w-full h-4 text-purple-400 animate-draw-line"
                              viewBox="0 0 410 18"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                                 stroke="currentColor"
                                 strokeWidth="3"
                                 fill="none"
                                 strokeLinecap="round"
                                 className="animate-dash"
                              />
                           </svg>
                           <span className="relative bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                              with us
                           </span>
                        </span>
                     </span>
                  </h1>
               </div>

               {/* Description with typewriter effect */}
               <div className="animate-fade-in-up animation-delay-600">
                  <p className="max-w-4xl mx-auto text-xl sm:text-2xl  leading-relaxed">
                     <span className="inline-block animate-typewriter">
                        Sign up now and experience the difference in just one
                        week
                     </span>
                  </p>
               </div>

               {/* CTA Button with enhanced animations */}
               <div className=" animate-fade-in-up animation-delay-800">
                  <CTABtn href={RouteConfig.admin.base}>Admin Demo</CTABtn>
               </div>

               {/* Trust indicators */}
               <div className="hidden lg:block pt-6 animate-fade-in-up animation-delay-1000">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8  text-sm">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Trusted by 10,000+ users</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-300"></div>
                        <span>Free trial</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-600"></div>
                        <span>No credit card required</span>
                     </div>
                  </div>
               </div>
            </div>
         </Container>

         {/* Inline styles for animations */}
         <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes draw-line {
                    0% { stroke-dasharray: 0 1000; }
                    100% { stroke-dasharray: 1000 0; }
                }
                
                @keyframes dash {
                    0% { stroke-dashoffset: 1000; }
                    100% { stroke-dashoffset: 0; }
                }
                
                @keyframes typewriter {
                    0% { width: 0; }
                    100% { width: 100%; }
                }
                
                .animate-blob { animation: blob 7s infinite; }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .animate-gradient-x { 
                    background-size: 200% auto;
                    animation: gradient-x 3s ease infinite; 
                }
                .animate-draw-line { animation: draw-line 2s ease-out 1s forwards; }
                .animate-dash { 
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: dash 2s ease-out 1s forwards;
                }
                .animate-typewriter { 
                    overflow: hidden;
                    white-space: nowrap;
                    animation: typewriter 2s steps(50) 1.5s forwards;
                    width: 0;
                }
                
                .animation-delay-200 { animation-delay: 200ms; }
                .animation-delay-300 { animation-delay: 300ms; }
                .animation-delay-400 { animation-delay: 400ms; }
                .animation-delay-600 { animation-delay: 600ms; }
                .animation-delay-800 { animation-delay: 800ms; }
                .animation-delay-1000 { animation-delay: 1000ms; }
                .animation-delay-2000 { animation-delay: 2000ms; }
                .animation-delay-4000 { animation-delay: 4000ms; }
                
                @media (max-width: 640px) {
                    .animate-typewriter {
                        white-space: normal;
                        width: auto;
                        animation: fade-in-up 0.8s ease-out forwards;
                    }
                    
                    .relative.flex.justify-center {
                        transform: scale(0.8);
                    }
                }
            `}</style>
      </section>
   );
}

export default CTA;
