import RouteConfig from '@/config/RouteConfig';
import Head from 'next/head';
import Link from 'next/link';
import {
   FiCheckCircle,
   FiClipboard,
   FiInfo,
   FiMessageCircle,
   FiMessageSquare,
   FiTrendingUp,
} from 'react-icons/fi';

export default function AdminContactsPage() {
   return (
      <div className="min-h-screen">
         <Head>
            <title>Nexca Contacts - Communication System</title>
            <meta
               name="description"
               content="Nexca is contact and admin feedback system Contacts"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="mx-auto max-w-4xl px-4 py-12 lg:py-16">
            {/* Hero Section */}
            <div className="mb-16">
               <h1 className="relative mb-6 text-3xl font-bold sm:text-4xl">
                  <span className="absolute -left-3 top-1/2 hidden h-8 w-1 -translate-y-1/2 transform rounded-full bg-indigo-700 sm:block" />
                  Streamlining Communication
                  <span className="mt-1 block text-xl font-normal sm:text-2xl">
                     Nexca&apos;s Contact and Admin Feedback System
                  </span>
               </h1>

               <p className="text-lg leading-relaxed">
                  Nexca offers a seamless way for users to share ideas,
                  messages, and feedback while providing administrators with an
                  efficient system to manage and respond to these inputs.
               </p>
            </div>

            {/* How It Works */}
            <div className="mb-16">
               <h2 className="mb-8 text-2xl font-bold">How It Works</h2>

               <div className="mb-8 rounded-xl border border-indigo-700 bg-base-200 p-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                     <div className="flex flex-col items-center text-center">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                           <span className="text-lg font-bold">1</span>
                        </div>
                        <h3 className="font-medium">User Submits Feedback</h3>
                        <p className="mt-1 text-sm">
                           Via the intuitive contact form
                        </p>
                     </div>
                     <div className="flex flex-col items-center text-center">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                           <span className="text-lg font-bold">2</span>
                        </div>
                        <h3 className="font-medium">Admin Reviews</h3>
                        <p className="mt-1 text-sm">
                           Through the centralized dashboard
                        </p>
                     </div>
                     <div className="flex flex-col items-center text-center">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                           <span className="text-lg font-bold">3</span>
                        </div>
                        <h3 className="font-medium">Implementation</h3>
                        <p className="mt-1 text-sm">
                           Feedback drives platform improvements
                        </p>
                     </div>
                  </div>
               </div>

               <div className="flex rounded-lg border border-indigo-700 bg-base-200 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-700 p-2">
                     <FiInfo className="text-white" />
                  </div>
                  <div className="ml-4">
                     <h3 className="font-medium text-indigo-700">
                        Did you know?
                     </h3>
                     <p className="mt-1 text-sm">
                        Nexca&apos;s approach sets a new standard for user
                        engagement and platform improvement.
                     </p>
                  </div>
               </div>
            </div>

            {/* User-Friendly Contact Page */}
            <div className="mb-16">
               <h2 className="mb-4 text-2xl font-bold">
                  User-Friendly Contact Page
               </h2>

               <div className="mb-8 overflow-hidden rounded-xl border border-base-200 bg-base-200 shadow-xs">
                  <p className="p-6">
                     Nexca&apos;s contact page, available at
                     <a
                        href="https://nexca.vercel.app/contacts"
                        className="mx-1 font-medium text-indigo-700 hover:underline"
                     >
                        nexca.vercel.app/contacts
                     </a>
                     , allows users to easily share their thoughts.
                  </p>
               </div>

               <p className="">
                  The simple and intuitive form ensures that messages, whether
                  ideas, questions, or feedback, are delivered effortlessly.
                  This feature helps businesses prioritize user engagement and
                  build stronger connections.
               </p>

               <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-base-200 bg-base-200 p-4">
                     <div className="mb-2 flex items-center">
                        <FiMessageSquare className="mr-2 text-indigo-700" />
                        <h3 className="font-medium">Effortless Submission</h3>
                     </div>
                     <p className="text-sm">
                        Minimalist design focuses on quick and easy feedback
                        submission without unnecessary friction.
                     </p>
                  </div>
                  <div className="rounded-lg border border-base-200 bg-base-200 p-4">
                     <div className="mb-2 flex items-center">
                        <FiCheckCircle className="mr-2 text-indigo-700" />
                        <h3 className="font-medium">Real-time Validation</h3>
                     </div>
                     <p className="text-sm">
                        Form fields validate in real-time to ensure complete and
                        accurate information.
                     </p>
                  </div>
               </div>
            </div>

            {/* Admin Dashboard */}
            <div className="mb-16">
               <h2 className="mb-4 text-2xl font-bold">
                  Admin Dashboard for Feedback Management
               </h2>

               <p className="mb-6">
                  Administrators can access all user messages through the admin
                  portal at
                  <Link
                     href={`https://nexca.vercel.app${RouteConfig.admin.contacts}`}
                     className="mx-1 font-medium text-indigo-700 hover:underline"
                  >
                     nexca.vercel.app{RouteConfig.admin.contacts}
                  </Link>
                  . This centralized dashboard makes it easy to browse,
                  categorize, and respond to feedback.
               </p>

               <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-base-200 bg-base-200 p-4 shadow-xs">
                     <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                        <FiClipboard size={16} />
                     </div>
                     <h3 className="font-medium">Organize</h3>
                     <p className="mt-1 text-sm">
                        Sort and categorize feedback by type, priority, and
                        status
                     </p>
                  </div>

                  <div className="rounded-lg border border-base-200 bg-base-200 p-4 shadow-xs">
                     <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                        <FiMessageCircle size={16} />
                     </div>
                     <h3 className="font-medium">Respond</h3>
                     <p className="mt-1 text-sm">
                        Reply directly to users from within the dashboard
                     </p>
                  </div>

                  <div className="rounded-lg border border-base-200 bg-base-200 p-4 shadow-xs">
                     <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                        <FiTrendingUp size={16} />
                     </div>
                     <h3 className="font-medium">Track</h3>
                     <p className="mt-1 text-sm">
                        Monitor feedback trends and implementation status
                     </p>
                  </div>
               </div>

               <p>
                  By organizing user inputs effectively, administrators can
                  address concerns, implement ideas, and improve services based
                  on direct user input. The dashboard provides comprehensive
                  analytics and management tools in one central location.
               </p>
            </div>

            {/* Why It Matters */}
            <div className="mb-16">
               <h2 className="mb-4 text-2xl font-bold">Why It Matters</h2>

               <div className="mb-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                     <div className="overflow-hidden rounded-xl border border-base-200 bg-base-200 p-6 shadow-xs">
                        <h3 className="mb-3 text-lg font-semibold">
                           For Businesses
                        </h3>
                        <ul className="space-y-3">
                           <li className="flex items-start">
                              <FiCheckCircle className="mr-2 mt-0.5 h-5 w-5 text-indigo-700" />
                              <span>Better customer satisfaction</span>
                           </li>
                           <li className="flex items-start">
                              <FiCheckCircle className="mr-2 mt-0.5 h-5 w-5 text-indigo-700" />
                              <span>Streamlined workflow management</span>
                           </li>
                           <li className="flex items-start">
                              <FiCheckCircle className="mr-2 mt-0.5 h-5 w-5 text-indigo-700" />
                              <span>Data-driven improvement decisions</span>
                           </li>
                           <li className="flex items-start">
                              <FiCheckCircle className="mr-2 mt-0.5 h-5 w-5 text-indigo-700" />
                              <span>Increased brand loyalty</span>
                           </li>
                        </ul>
                     </div>

                     <div className="overflow-hidden rounded-xl border border-base-200 bg-base-200 p-6 shadow-xs">
                        <h3 className="mb-3 text-lg font-semibold">
                           For Users
                        </h3>
                        <ul className="space-y-3">
                           <li className="flex items-start">
                              <FiCheckCircle className="mr-2 mt-0.5 h-5 w-5 text-indigo-700" />
                              <span>Voice is heard and valued</span>
                           </li>
                           <li className="flex items-start">
                              <FiCheckCircle className="mr-2 mt-0.5 h-5 w-5 text-indigo-700" />
                              <span>Easier communication with support</span>
                           </li>
                           <li className="flex items-start">
                              <FiCheckCircle className="mr-2 mt-0.5 h-5 w-5 text-indigo-700" />
                              <span>
                                 Platform improvements based on feedback
                              </span>
                           </li>
                           <li className="flex items-start">
                              <FiCheckCircle className="mr-2 mt-0.5 h-5 w-5 text-indigo-700" />
                              <span>Enhanced overall user experience</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="rounded-xl bg-indigo-700 p-6 text-white">
                  <h3 className="mb-3 text-xl font-semibold">
                     Setting New Standards
                  </h3>
                  <p className="opacity-90">
                     Nexca&apos;s approach sets a new standard for user
                     engagement and platform improvement. By creating this
                     seamless feedback loop, Nexca ensures continuous evolution
                     based on real user needs rather than assumptions.
                  </p>

                  <div className="mt-6 border-t border-indigo-600 pt-6">
                     <div className="flex items-center">
                        <div className="font-semibold">Ready to implement?</div>
                        <div className="ml-auto">
                           <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-indigo-700">
                              Get Started
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}
