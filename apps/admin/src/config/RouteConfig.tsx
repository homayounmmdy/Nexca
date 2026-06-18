const RouteConfig = {
   admin: {
      base: '/admin',
      contacts: '/admin/contacts',
      emails: '/admin/emails',
      help: {
         base: '/admin/help',
         contacts: '/admin/help/contacts',
         sections: '/admin/help/sections',
         services: '/admin/help/services',
         textadv: '/admin/help/textadv',
      },
      master: '/admin/master',
      posts: {
         base: '/admin/posts',
         new: '/admin/posts/new',
      },
      maps: {
         base: '/admin/maps',
         new: '/admin/maps/new',
      },
      sections: {
         base: '/admin/sections',
         new: '/admin/sections/new',
      },
      services: {
         base: '/admin/services',
         posts: '/admin/services/posts',
         new: '/admin/services/new',
      },
      settings: {
         base: '/admin/settings',
         themes: '/admin/settings/themes',
      },
      release: {
         base: '/admin/release',
         new: '/admin/release/new',
      },
      textadv: {
         base: '/admin/textadv',
         new: '/admin/textadv/new',
      },
      adv: {
         base: '/admin/adv',
         img: {
            base: '/admin/adv/img',
            new: '/admin/adv/img/new',
         },
      },
   },
};

export default RouteConfig;
