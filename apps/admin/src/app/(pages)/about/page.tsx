import SiteConfig from '@/config/site';
import Link from 'next/link';
import { FaRocket, FaHandshake, FaCode, FaEnvelope } from 'react-icons/fa';
import {
   SiNextdotjs,
   SiReact,
   SiMongodb,
   SiTailwindcss,
   SiVercel,
} from 'react-icons/si';
import { Button, Container } from '@/components/atoms';
import { MainHead } from '@/components/molecules';

export default function About() {
   return (
      <>
         <MainHead
            title="About Nexca"
            description="Elevating your digital presence with elegant solutions and seamless experiences."
         />

         {/* Content Sections */}
         <Container className="py-16 mt-4">
            {/* Introduction */}
            <div className="mb-20">
               <div className="prose prose-lg max-w-none">
                  <p className="text-xl font-light leading-relaxed ">
                     Welcome to{' '}
                     <Link
                        href={SiteConfig.siteURL}
                        className="font-medium text-indigo-700 transition-colors hover:text-indigo-800"
                     >
                        {SiteConfig.name}
                     </Link>
                     , where innovation meets elegance. Our platform empowers
                     you to create and manage sophisticated blog websites with
                     unparalleled ease through our intuitive admin panel.
                     Experience digital publishing reimagined.
                  </p>
               </div>
            </div>

            {/* Mission Section */}
            <div className="mb-20">
               <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200">
                     <FaRocket className="h-6 w-6 text-indigo-700" />
                  </div>
                  <h2 className="text-3xl font-bold ">Our Mission</h2>
               </div>
               <div className="prose prose-lg max-w-none">
                  <p className="text-lg ">
                     At {SiteConfig.name}, we believe that digital
                     sophistication should be accessible to all. Our mission is
                     to democratize web publishing by providing powerful tools
                     that require no coding knowledge, while delivering results
                     that exude professionalism and refinement. We&apos;re
                     committed to empowering creators with technology that works
                     as seamlessly as it looks.
                  </p>
               </div>
            </div>

            {/* Technologies Section */}
            <div className="mb-20">
               <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200">
                     <FaCode className="h-6 w-6 text-indigo-700" />
                  </div>
                  <h2 className="text-3xl font-bold ">
                     Crafted with Precision
                  </h2>
               </div>

               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl bg-base-200 p-8 shadow-sm transition-all hover:shadow-md hover:translate-y-[-4px]">
                     <SiNextdotjs className="h-8 w-8  mb-4" />
                     <h3 className="text-xl font-semibold ">Next.js</h3>
                     <p className="mt-2 ">
                        Enterprise-grade framework for seamless navigation and
                        optimal performance.
                     </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-8 shadow-sm transition-all hover:shadow-md hover:translate-y-[-4px]">
                     <SiReact className="h-8 w-8 text-blue-500 mb-4" />
                     <h3 className="text-xl font-semibold ">React</h3>
                     <p className="mt-2 ">
                        Dynamic interfaces that respond elegantly to user
                        interactions.
                     </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-8 shadow-sm transition-all hover:shadow-md hover:translate-y-[-4px]">
                     <SiMongodb className="h-8 w-8 text-green-500 mb-4" />
                     <h3 className="text-xl font-semibold ">MongoDB</h3>
                     <p className="mt-2 ">
                        Flexible and scalable data architecture for growing
                        content platforms.
                     </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-8 shadow-sm transition-all hover:shadow-md hover:translate-y-[-4px]">
                     <SiTailwindcss className="h-8 w-8 text-teal-500 mb-4" />
                     <h3 className="text-xl font-semibold ">Tailwind CSS</h3>
                     <p className="mt-2 ">
                        Refined aesthetics with utility-first styling for
                        pixel-perfect designs.
                     </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-8 shadow-sm transition-all hover:shadow-md hover:translate-y-[-4px]">
                     <svg
                        className="h-8 w-8 text-blue-600 mb-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                     >
                        <path d="M22.5 8.5c0-1.5-1.567-2.5-3.5-2.5s-3.5 1-3.5 2.5V11H4v1h11.5v2.5c0 1.5 1.567 2.5 3.5 2.5s3.5-1 3.5-2.5V8.5z" />
                        <path d="M4 4v16h16V4H4zm14 14H6V6h12v12z" />
                     </svg>
                     <h3 className="text-xl font-semibold ">Clerk</h3>
                     <p className="mt-2 ">
                        Enterprise-level authentication with streamlined user
                        experiences.
                     </p>
                  </div>

                  <div className="rounded-xl bg-base-200 p-8 shadow-sm transition-all hover:shadow-md hover:translate-y-[-4px]">
                     <SiVercel className="h-8 w-8  mb-4" />
                     <h3 className="text-xl font-semibold ">Vercel</h3>
                     <p className="mt-2 ">
                        Global edge network ensuring lightning-fast content
                        delivery.
                     </p>
                  </div>
               </div>
            </div>

            {/* Partners Section */}
            <div className="mb-20">
               <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200">
                     <FaHandshake className="h-6 w-6 text-indigo-700" />
                  </div>
                  <h2 className="text-3xl font-bold ">Strategic Alliances</h2>
               </div>
               <p className="text-lg mb-8">
                  We&apos;ve forged strategic partnerships with industry
                  innovators to deliver a platform that stands at the forefront
                  of web technology. These collaborations allow us to offer you
                  tools and services that are not just current, but visionary.
               </p>

               <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-70 hover:opacity-90 transition-opacity">
                  <SiNextdotjs className="h-12 w-12" />
                  <SiReact className="h-12 w-12" />
                  <SiVercel className="h-12 w-12" />
                  <SiTailwindcss className="h-12 w-12" />
                  <SiMongodb className="h-12 w-12" />
               </div>
            </div>

            {/* Contact Section */}
            <div className="rounded-2xl bg-base-200 p-8 lg:p-12 shadow-sm">
               <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-300">
                     <FaEnvelope className="h-6 w-6 text-indigo-700" />
                  </div>
                  <h2 className="text-3xl font-bold ">Connect With Us</h2>
               </div>
               <p className="text-lg  mb-6">
                  Our dedicated team of specialists is ready to assist you on
                  your digital journey. Whether you have inquiries about our
                  platform or need personalized support, we&apos;re committed to
                  providing timely and thoughtful assistance.
               </p>
               <Link href="/contacts">
                  <Button className="btn-outline">Contact Our Team</Button>
               </Link>
            </div>
         </Container>
      </>
   );
}
