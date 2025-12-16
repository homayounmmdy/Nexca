import RouteConfig from '@/config/RouteConfig';
import Link from 'next/link';
import React from 'react';
import CalloutBox from '@/app/(features)/admin/(pages)/help/components/CalloutBox';

const SectionsHelpAdminPage: React.FC = () => {
   return (
      <div className="min-h-screen p-4">
         <div className="mx-auto overflow-hidden rounded-xl border-2 border-indigo-700 shadow-md">
            <div className="bg-indigo-600 px-8 py-6">
               <h1 className="text-3xl font-bold text-white">
                  Understanding Sections in Nexca
               </h1>
               <p className="mt-2 text-indigo-100">
                  A comprehensive guide to organizing your content
               </p>
            </div>

            <div className="p-8">
               <section className="mb-12">
                  <p className="mb-6">
                     Nexca is a versatile platform designed to streamline
                     content creation and management. One of its core features
                     is the use of{' '}
                     <span className="font-semibold">sections</span>, which play
                     a crucial role in organizing and distributing posts.
                  </p>
                  <CalloutBox
                     className="mb-8"
                     title="What Are Sections in Nexca?"
                  >
                     <p className="">
                        Sections in Nexca are designated areas where posts are
                        categorized and displayed. When you create a post, you
                        first select a service and then choose a section to
                        publish it. This ensures that your content is organized
                        and reaches the intended audience.
                     </p>
                     <p className="mt-4">
                        For example, if you&apos;re creating a post about a new
                        product launch, you might choose a section like
                        &quot;Announcements&quot; or &quot;Product
                        Updates.&quot;
                     </p>
                  </CalloutBox>

                  <div className="grid gap-8 md:grid-cols-2">
                     <div className="rounded-lg border border-base-200 bg-base-200 p-6 shadow-sm">
                        <h3 className="mb-3 text-xl font-semibold">
                           Customizing Section Names
                        </h3>
                        <p>
                           Nexca allows admins to{' '}
                           <span className="font-medium">rename sections</span>{' '}
                           to better suit their needs. This flexibility ensures
                           that the platform can adapt to different use cases
                           and organizational structures.
                        </p>
                     </div>

                     <div className="rounded-lg border border-base-200 bg-base-200 p-6 shadow-sm">
                        <h3 className="mb-3 text-xl font-semibold">
                           Section Limitations
                        </h3>
                        <p>
                           Creating new sections requires the{' '}
                           <span className="font-medium">Master Editor</span>{' '}
                           role, as each section must be coded and styled before
                           connecting to the admin interface.
                        </p>
                     </div>
                  </div>
               </section>

               <section className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold">
                     Key Section Restrictions
                  </h2>

                  <div className="space-y-6">
                     <CalloutBox
                        color="amber"
                        title="Why Can't I Create a New Section?"
                     >
                        <p className="">
                           Only the Master Editor can create new sections
                           because each section must first be coded and styled.
                        </p>
                        <ul className="ml-6 mt-3 list-disc space-y-1">
                           <li>Ensures consistency across the platform</li>
                           <li>
                              Proper backend integration for categorization
                           </li>
                           <li>Maintains seamless user experience</li>
                        </ul>
                     </CalloutBox>
                     <CalloutBox title="Why Can't I Change a Section's ID?">
                        <p className="">
                           Section IDs are unique identifiers that link sections
                           to their corresponding code. Changing a
                           section&apos;s ID can cause{' '}
                           <span className="font-medium">sync issues</span>,
                           resulting in lost posts.
                        </p>
                     </CalloutBox>
                     <CalloutBox
                        title="Why Can't I See Some Sections in the Admin
                           Panel?"
                     >
                        <p className="">
                           Some sections are{' '}
                           <span className="font-medium">
                              automatically generated
                           </span>{' '}
                           based on content in other sections. For example,
                           &quot;Next Main&quot; might pull content from the
                           &quot;Main&quot; section without requiring manual
                           intervention.
                        </p>
                     </CalloutBox>
                  </div>
               </section>

               <section className="mb-8">
                  <h2 className="mb-6 text-2xl font-bold">
                     Best Practices for Managing Sections
                  </h2>

                  <div className="rounded-lg bg-base-200 p-6">
                     <ul className="space-y-4">
                        {[
                           {
                              title: 'Plan Your Sections',
                              description:
                                 'Before creating posts, map out your content strategy and determine which sections are needed.',
                           },
                           {
                              title: 'Use Descriptive Names',
                              description:
                                 'Rename sections to clearly reflect their purpose and content type.',
                           },
                           {
                              title: 'Collaborate with the Master Editor',
                              description:
                                 'If you need a new section, coordinate with the Master Editor to ensure proper coding and integration.',
                           },
                           {
                              title: 'Avoid Unnecessary Changes',
                              description:
                                 'Refrain from modifying section IDs or deleting sections unless absolutely necessary.',
                           },
                        ].map((practice, index) => (
                           <li key={index} className="flex">
                              <div className="shrink-0">
                                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-base-200">
                                    {index + 1}
                                 </div>
                              </div>
                              <div className="ml-4">
                                 <h4 className="text-lg font-medium">
                                    {practice.title}
                                 </h4>
                                 <p className="mt-1">{practice.description}</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </section>

               <div className="border-t border-indigo-700 pt-8">
                  <div className="rounded-lg bg-base-200 p-6 text-center">
                     <h2 className="font-semibld mb-2 text-xl text-indigo-700">
                        Need More Help?
                     </h2>
                     <p className="">
                        Visit the Nexca admin panel at{' '}
                        <Link
                           href={`https://nexca.vercel.app/${RouteConfig.admin.sections.base}`}
                           className="text-indigo-700 hover:underline"
                        >
                           https://nexca.vercel.app
                           {RouteConfig.admin.sections.base}
                        </Link>{' '}
                        or reach out to your Master Editor.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SectionsHelpAdminPage;
