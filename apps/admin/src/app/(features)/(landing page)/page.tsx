import SiteConfig from '@/config/site';
import { Metadata } from 'next';
import React from 'react';
const Hero = React.lazy(() => import('./components/Hero'));
const Features = React.lazy(() => import('./components/Features'));
const CTA = React.lazy(() => import('./components/CTA'));
const TechStacks = React.lazy(() => import('./components/TechStacks'));
const FAQs = React.lazy(() => import('./components/FAQs'));
const StatsSection = React.lazy(() => import('./components/StatsSection'));
const PriceList = React.lazy(() => import('./components/PriceList'));

/**
 * LandingPage
 *
 * This is the main landing page of the website. It includes various sections such as Hero, Features, TechStacks, etc.
 * The page is designed to be SEO-friendly and optimized for user engagement.
 *
 * @returns {React.FC} - Returns a React Functional Component representing the landing page.
 */

const LandingPage = () => {
   return (
      <>
         <Hero />
         <Features />
         <CTA />
         <TechStacks />
         <FAQs />
         <StatsSection />
         <PriceList />
      </>
   );
};

export default LandingPage;

/**
 * Metadata configuration for the landing page.
 * This includes SEO-friendly tags for search engines and social media platforms.
 */
export const metadata: Metadata = {
   title: SiteConfig.title.slice(0, 60),
   description: SiteConfig.description,
   keywords: SiteConfig.keywords,
   authors: SiteConfig.authors,
   robots: SiteConfig.robots,

   alternates: {
      canonical: SiteConfig.siteURL,
   },
   openGraph: {
      title: SiteConfig.name,
      description: SiteConfig.description.slice(0, 150),
      siteName: SiteConfig.name,
      authors: SiteConfig.author,
      images: {
         url: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
         secureUrl: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
         width: 1200,
         height: 630,
         alt: `Preview image for ${SiteConfig.name}`,
      },
   },
   twitter: {
      card: 'summary_large_image',
      site: `@${SiteConfig.name}`,
      description: SiteConfig.description.slice(0, 150),
      creator: `@${SiteConfig.authorID}`,
      images: {
         url: `${SiteConfig.siteURL}/static/Image/logo.jpg`,
         alt: `Preview image for ${SiteConfig.name}`,
      },
   },
};
