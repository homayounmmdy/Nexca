const API_URL = process.env.API_URL || 'https://nexca.vercel.app';
const SiteConfig = {
   name: 'Nexca',
   title: 'The Ultimate Admin Panel for Agencies and Individuals',
   description:
      'Nexca offers a robust admin panel for agencies and individuals, enabling seamless data management, content sharing, and audience engagement.',
   keywords: 'Admin panel , Dashboard , Custom panel, Data Ma Data management',
   authors: [{ name: 'Nexca Team', url: API_URL }],
   siteURL: API_URL,
   lang: 'en',
   dir: 'ltr',
   slogan:
      'Experience the power of an open-source CMS built with Next.js. Effortlessly manage content, streamline workflows, and connect with your audience. Perfect for agencies, bloggers, and creators.',
   // media
   email: 'homayoun763@gmail.com',
   github: 'https://github.com/homayunmmdy/Nexca',
   phoneNumber: '0922 4003 487',
   linkedin: 'https://www.linkedin.com/in/homayunmmdy/',
   robots: 'index , follow',
   author: 'Nexca Team',
   authorID: 'Nexca_Team',
};

export default SiteConfig;
