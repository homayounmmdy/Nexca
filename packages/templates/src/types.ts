type BaseType = {
  _id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type CategoryType = {
   id: number;
   name: string;
};

export type PostsCashType = {
  title: string;
  imgurl: string;
  field?: string;
  description: string;
  templates: string;
  postType: string;
  services: string;
  section: string;
  categories?: CategoryType[];
  masterEditor?: boolean;
  source?: string;
  author?: string;
} & BaseType;
