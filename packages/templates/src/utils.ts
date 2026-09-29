export const slugify = (title: string) =>
   title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

export const postLinkGenerator = (_id: string, title: string) =>
   `/posts/${_id}/${slugify(title)}`;