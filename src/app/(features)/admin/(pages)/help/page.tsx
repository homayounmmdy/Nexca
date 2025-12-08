import RouteConfig from '@/config/RouteConfig';
import SiteConfig from '@/config/site';
import Link from 'next/link';
import {
   FiArrowRight,
   FiBookOpen,
   FiHelpCircle,
   FiMail,
   FiMessageCircle,
} from 'react-icons/fi';

export default function HelpPage() {
   return (
      <div className="min-h-screen">
         <div className="mx-auto max-w-5xl px-6 py-12">
            {/* Hero Section */}
            <div className="mb-16 text-center">
               <div className="mb-4 inline-block rounded-full border-2 border-indigo-700 p-2 px-4 text-sm font-medium text-indigo-700">
                  Help & Support Center
               </div>
               <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                  Welcome to the {SiteConfig.name} Help Center
               </h1>
               <p className="mx-auto max-w-2xl text-xl">
                  {SiteConfig.description}
               </p>
            </div>

            {/* Quick Navigation Cards */}
            <div className="mb-16 grid gap-6 md:grid-cols-3">
               <div className="rounded-xl border border-indigo-700 p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                  <div className="mb-4 flex items-center">
                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-base-200 text-blue-600">
                        <FiBookOpen className="h-6 w-6" />
                     </div>
                     <h3 className="ml-4 text-lg font-semibold">User Guides</h3>
                  </div>
                  <p className="mb-4">
                     Comprehensive guides to help you get the most out of{' '}
                     {SiteConfig.name}&apos;s features.
                  </p>
                  <Link
                     href="#"
                     className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                  >
                     Browse guides <FiArrowRight className="ml-2" />
                  </Link>
               </div>

               <div className="rounded-xl border border-indigo-700 p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                  <div className="mb-4 flex items-center">
                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-base-200 text-purple-600">
                        <FiHelpCircle className="h-6 w-6" />
                     </div>
                     <h3 className="ml-4 text-lg font-semibold">FAQs</h3>
                  </div>
                  <p className="mb-4">
                     Quick answers to the most common questions about using the
                     platform.
                  </p>
                  <Link
                     href="#"
                     className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800"
                  >
                     View FAQs <FiArrowRight className="ml-2" />
                  </Link>
               </div>

               <div className="rounded-xl border border-indigo-700 p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                  <div className="mb-4 flex items-center">
                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-base-200 text-green-600">
                        <FiMessageCircle className="h-6 w-6" />
                     </div>
                     <h3 className="ml-4 text-lg font-semibold">
                        Contact Support
                     </h3>
                  </div>
                  <p className="mb-4">
                     Need personalized help? Reach out to our dedicated support
                     team.
                  </p>
                  <Link
                     href={RouteConfig.admin.help.contacts}
                     className="inline-flex items-center font-medium text-green-600 hover:text-green-800"
                  >
                     Contact us <FiArrowRight className="ml-2" />
                  </Link>
               </div>
            </div>

            {/* Introduction Section */}
            <section className="mb-16 rounded-xl border border-indigo-700 p-8 shadow-xs">
               <h2 className="mb-6 flex items-center text-2xl font-bold">
                  <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-indigo-700">
                     1
                  </span>
                  Getting Started with {SiteConfig.name}
               </h2>
               <p className="mb-6 leading-relaxed">
                  New to {SiteConfig.name}? Our platform is designed to make
                  content management simple and intuitive. Choose each section
                  in the sidebar to learn more about specific features and how
                  to use {SiteConfig.name} effectively.
               </p>
               <div className="rounded-sm border-l-4 border-indigo-500 p-4">
                  <p>
                     <span className="font-medium">Pro tip:</span> Start with
                     the &quot;Quick Start Guide&quot; in the sidebar for a
                     comprehensive overview of the platform&apos;s core
                     functionality.
                  </p>
               </div>
            </section>

            {/* Contact Section */}
            <section
               id="contact"
               className="mb-16 rounded-xl border border-gray-100 p-8 shadow-xs"
            >
               <h2 className="mb-6 text-2xl font-bold">
                  Contact Our Support Team
               </h2>

               <div className="grid gap-8 md:grid-cols-2">
                  <div>
                     <h3 className="mb-4 text-lg font-medium">Email Support</h3>
                     <div className="space-y-4">
                        <div className="flex items-start">
                           <FiMail className="mr-3 mt-1 h-5 w-5 text-indigo-600" />
                           <div>
                              <p className="font-medium">Primary Support</p>
                              <Link
                                 href="mailto:homayoun763@gmail.com"
                                 className="text-indigo-600 transition-colors hover:text-indigo-800"
                              >
                                 homayoun763@gmail.com
                              </Link>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <FiMail className="mr-3 mt-1 h-5 w-5 text-indigo-600" />
                           <div>
                              <p className="font-medium">Technical Support</p>
                              <Link
                                 href="mailto:homayoun763@gmail.com"
                                 className="text-indigo-600 transition-colors hover:text-indigo-800"
                              >
                                 homayoun763@gmail.com
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div>
                     <h3 className="mb-4 text-lg font-medium">
                        Instant Messaging
                     </h3>
                     <div className="flex items-start">
                        <FiMessageCircle className="mr-3 mt-1 h-5 w-5 text-green-600" />
                        <div>
                           <p className="font-medium">WhatsApp Support</p>
                           <Link
                              href="https://wa.me/09224003487"
                              className="flex items-center text-green-600 transition-colors hover:text-green-800"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              0922 4003487
                              <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                                 Available 9AM-6PM
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-8 rounded-sm border-l-4 border-amber-400 bg-amber-50 p-4">
                  <h4 className="mb-2 font-medium text-amber-800">
                     Before Contacting Support
                  </h4>
                  <p className="text-amber-700">
                     Please ensure you&apos;ve reviewed the relevant help
                     sections and FAQs first. This helps us provide faster and
                     more efficient support for complex issues.
                  </p>
               </div>
            </section>

            {/* Help Topics */}
            <section className="rounded-xl border border-gray-100 p-8 shadow-xs">
               <h2 className="mb-6 text-2xl font-bold">Popular Help Topics</h2>

               <div className="grid gap-4 md:grid-cols-2">
                  <Link
                     href="#"
                     className="flex items-center rounded-lg border border-indigo-700 p-4 transition-colors hover:bg-indigo-700"
                  >
                     <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-base-200 text-blue-600">
                        <span className="font-medium">1</span>
                     </div>
                     <div>
                        <h3 className="font-medium">Getting Started</h3>
                        <p className="text-sm">
                           Complete platform overview for new users
                        </p>
                     </div>
                  </Link>

                  <Link
                     href="/help/services"
                     className="flex items-center rounded-lg border border-indigo-700 p-4 transition-colors hover:bg-indigo-700"
                  >
                     <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-base-200 text-indigo-700">
                        <span className="font-medium">2</span>
                     </div>
                     <div>
                        <h3 className="font-medium">Managing Services</h3>
                        <p className="text-sm">
                           Create and organize content services
                        </p>
                     </div>
                  </Link>

                  <Link
                     href="#"
                     className="flex items-center rounded-lg border border-indigo-700 p-4 transition-colors hover:bg-indigo-700"
                  >
                     <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-base-100 text-green-600">
                        <span className="font-medium">3</span>
                     </div>
                     <div>
                        <h3 className="font-medium">Content Management</h3>
                        <p className="text-sm">
                           Creating and organizing your posts
                        </p>
                     </div>
                  </Link>

                  <Link
                     href="#"
                     className="flex items-center rounded-lg border border-indigo-700 p-4 transition-colors hover:bg-indigo-700"
                  >
                     <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-base-200 text-red-600">
                        <span className="font-medium">4</span>
                     </div>
                     <div>
                        <h3 className="font-medium">User Management</h3>
                        <p className="text-sm">
                           Managing permissions and accounts
                        </p>
                     </div>
                  </Link>
               </div>
            </section>
         </div>
      </div>
   );
}
