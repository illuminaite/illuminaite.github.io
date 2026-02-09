export interface Blog {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  image?: string;
  image_credit?: string;
}
