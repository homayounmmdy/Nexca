import RouteConfig from '@/config/RouteConfig';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FiEdit, FiExternalLink, FiPlus, FiTrash2 } from 'react-icons/fi';

const TextAdvHelpPage: React.FC = () => {
   return (
      <div>
         <Head>
            <title>
               Exploring the TextAdv Section in Nexca | Comprehensive Guide
            </title>
            <meta
               name="description"
               content="Learn how to create, edit, and delete text-based ads in Nexca is TextAdv section with this comprehensive guide."
            />
         </Head>

         <main className="mx-auto">
            <div className="overflow-hidden rounded-2xl border-2 border-indigo-700 shadow-xl backdrop-blur-xs backdrop-filter">
               <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-800 to-indigo-600 opacity-90"></div>
                  <div className="relative px-6 py-8 sm:px-10">
                     <h1 className="text-3xl font-bold sm:text-4xl">
                        Exploring the TextAdv Section in Nexca
                     </h1>
                     <p className="mt-2 text-lg">A Comprehensive Guide</p>
                  </div>
               </div>

               <div className="p-6 sm:p-10">
                  <div className="prose-lg prose max-w-none">
                     <p className="leading-relaxed">
                        Nexca, a versatile platform for managing and displaying
                        advertisements, offers a dedicated section called{' '}
                        <span className="font-semibold">TextAdv</span> for
                        creating, editing, and deleting text-based ads. This
                        feature is designed to provide administrators with a
                        seamless experience in managing advertisements that
                        appear on the website. Whether you&apos;re looking to
                        create a new ad, edit an existing one, or remove
                        outdated content, the TextAdv section has you covered.
                     </p>

                     <h2 className="mb-6 mt-12 text-2xl font-bold">
                        Accessing the TextAdv Section
                     </h2>
                     <div className="rounded-xl border border-base-200 bg-base-200 p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                        <p className="mb-4">
                           To get started, navigate to the TextAdv section by
                           visiting the following link:
                        </p>
                        <Link
                           href={`https://nexca.vercel.app${RouteConfig.admin.textadv.base}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center font-medium text-indigo-800 transition-colors hover:text-indigo-600"
                        >
                           <span>
                              https://nexca.vercel.app
                              {RouteConfig.admin.textadv.base}
                           </span>
                           <FiExternalLink className="ml-2" />
                        </Link>
                        <p className="mt-4">
                           This page serves as the central hub for all your
                           text-based advertisements. Here, you&apos;ll find a
                           list of all existing ads on the website, allowing you
                           to easily review and manage them.
                        </p>
                     </div>

                     <h2 className="mb-6 mt-12 text-2xl font-bold">
                        Editing and Deleting Ads
                     </h2>
                     <div className="rounded-xl border border-base-200 bg-base-200 p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                           <div className="mb-6 md:mb-0 md:w-1/3">
                              <div className="flex items-center justify-center rounded-lg border border-base-300 bg-base-300 p-4">
                                 <div className="flex space-x-4">
                                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                       <FiEdit className="mr-1" /> Edit
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                                       <FiTrash2 className="mr-1" /> Delete
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="md:w-2/3">
                              <p>
                                 Once you&apos;re on the TextAdv page,
                                 you&apos;ll notice that each ad comes with
                                 options to edit or delete it. This
                                 functionality ensures that you can keep your
                                 advertisements up-to-date and relevant. If an
                                 ad is no longer needed, simply delete it to
                                 keep your list clean and organized.
                              </p>
                           </div>
                        </div>
                     </div>

                     <h2 className="mb-6 mt-12 text-2xl font-bold">
                        Creating a New Advertisement
                     </h2>
                     <div className="rounded-xl border border-base-200 bg-base-200 p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                        <p className="mb-4">
                           To create a new text-based ad, head over to the
                           following link:
                        </p>
                        <Link
                           href={`https://nexca.vercel.app${RouteConfig.admin.textadv.new}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center font-medium text-indigo-800 transition-colors hover:text-indigo-600"
                        >
                           <span>
                              https://nexca.vercel.app
                              {RouteConfig.admin.textadv.new}
                           </span>
                           <FiExternalLink className="ml-2" />
                        </Link>
                        <p className="mt-4">
                           This page is where the magic happens. Here&apos;s a
                           step-by-step breakdown of the fields you&apos;ll need
                           to fill out to create a new ad:
                        </p>
                     </div>

                     <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="relative overflow-hidden rounded-xl border border-base-200 bg-base-200 shadow-xs transition-shadow duration-300 hover:shadow-md">
                           <div className="absolute left-0 top-0 h-full w-1 bg-indigo-800"></div>
                           <div className="p-6 pl-8">
                              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-800 font-semibold">
                                 1
                              </div>
                              <h3 className="text-lg font-medium">
                                 Selector Section for Ads
                              </h3>
                              <p className="mt-2">
                                 The first step is to choose the{' '}
                                 <span className="font-medium">placement</span>{' '}
                                 of your ad. This determines where the
                                 advertisement will be displayed on the website.
                                 Selecting the right placement is crucial for
                                 ensuring your ad reaches the intended audience.
                              </p>
                           </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl border border-base-200 bg-base-200 shadow-xs transition-shadow duration-300 hover:shadow-md">
                           <div className="absolute left-0 top-0 h-full w-1 bg-indigo-800"></div>
                           <div className="p-6 pl-8">
                              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-800 font-semibold">
                                 2
                              </div>
                              <h3 className="text-lg font-medium">Ad Name</h3>
                              <p className="mt-2">
                                 Next, you&apos;ll need to provide an{' '}
                                 <span className="font-medium">Ad Name</span>.
                                 It&apos;s important to note that this name is
                                 not visible to users; it&apos;s solely for
                                 administrative purposes. Use a clear and
                                 descriptive name to make it easier to identify
                                 and manage the ad later.
                              </p>
                           </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl border border-base-200 bg-base-200 shadow-xs transition-shadow duration-300 hover:shadow-md">
                           <div className="absolute left-0 top-0 h-full w-1 bg-indigo-800"></div>
                           <div className="p-6 pl-8">
                              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-800 font-semibold">
                                 3
                              </div>
                              <h3 className="text-lg font-medium">
                                 Body of the Ad
                              </h3>
                              <p className="mt-2">
                                 This is where you input the actual content of
                                 your advertisement. The text you enter here
                                 will be displayed to users, so make sure
                                 it&apos;s engaging, concise, and aligned with
                                 your marketing goals.
                              </p>
                           </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl border border-base-200 bg-base-200 shadow-xs transition-shadow duration-300 hover:shadow-md">
                           <div className="absolute left-0 top-0 h-full w-1 bg-indigo-800"></div>
                           <div className="p-6 pl-8">
                              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-800 font-semibold">
                                 4
                              </div>
                              <h3 className="text-lg font-medium">
                                 Link for the Ad
                              </h3>
                              <p className="mt-2">
                                 Finally, you&apos;ll need to add a{' '}
                                 <span className="font-medium">link</span> that
                                 users will be directed to when they click on
                                 the ad. This could be a product page, a
                                 promotional offer, or any other relevant
                                 destination.
                              </p>
                           </div>
                        </div>
                     </div>

                     <h2 className="mb-6 mt-12 text-2xl font-bold">
                        Why Use the TextAdv Section?
                     </h2>
                     <div className="rounded-xl border border-base-200 bg-base-200 p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                        <div className="flex flex-col lg:flex-row lg:space-x-6">
                           <div className="mb-6 lg:mb-0 lg:w-1/4">
                              <div className="flex h-full items-center justify-center rounded-xl bg-indigo-800 p-4">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={2}
                                       d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    />
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={2}
                                       d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                    />
                                 </svg>
                              </div>
                           </div>
                           <div className="lg:w-3/4">
                              <p>
                                 The TextAdv section in Nexca is a powerful tool
                                 for businesses and administrators who want to
                                 maintain control over their text-based
                                 advertisements. Its user-friendly interface and
                                 straightforward functionality make it easy to
                                 create, edit, and delete ads without any
                                 technical expertise. By leveraging this
                                 feature, you can ensure that your ads are
                                 always relevant, well-placed, and effective in
                                 driving user engagement.
                              </p>
                           </div>
                        </div>
                     </div>

                     <h2 className="mb-6 mt-12 text-2xl font-bold">
                        Conclusion
                     </h2>
                     <div className="rounded-xl border border-base-200 bg-base-200 p-6 shadow-xs transition-shadow duration-300 hover:shadow-md">
                        <p>
                           Whether you&apos;re a seasoned marketer or new to
                           managing advertisements, the TextAdv section in Nexca
                           simplifies the process of handling text-based ads.
                           From creating new ads to editing or deleting existing
                           ones, this feature provides all the tools you need to
                           keep your advertising strategy on point. So, head
                           over to the TextAdv section today and start
                           optimizing your ads for maximum impact!
                        </p>
                     </div>

                     <div className="mt-12 rounded-xl bg-linear-to-r from-indigo-800 to-indigo-700 p-8 shadow-lg">
                        <h3 className="mb-6 text-xl font-medium">
                           Links to Get Started:
                        </h3>
                        <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
                           <div className="flex items-start rounded-lg bg-white/10 p-4 backdrop-blur-xs">
                              <div className="shrink-0">
                                 <FiEdit className="h-6 w-6" />
                              </div>
                              <div className="ml-4">
                                 <p className="font-medium">
                                    Manage Existing Ads
                                 </p>
                                 <Link
                                    href={`https://nexca.vercel.app${RouteConfig.admin.textadv.base}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover: mt-1 inline-block text-sm text-indigo-100 transition-colors"
                                 >
                                    https://nexca.vercel.app
                                    {RouteConfig.admin.textadv.base}
                                 </Link>
                              </div>
                           </div>
                           <div className="flex items-start rounded-lg bg-white/10 p-4 backdrop-blur-xs">
                              <div className="shrink-0">
                                 <FiPlus className="h-6 w-6" />
                              </div>
                              <div className="ml-4">
                                 <p className="font-medium">Create a New Ad</p>
                                 <Link
                                    href={`https://nexca.vercel.app${RouteConfig.admin.textadv.new}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover: mt-1 inline-block text-sm text-indigo-100 transition-colors"
                                 >
                                    https://nexca.vercel.app
                                    {RouteConfig.admin.textadv.new}
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
};

export default TextAdvHelpPage;
