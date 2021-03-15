export interface PostType {
  id: string;
  title: string;
  image: string;
  author: string;
  createdAt: string;
  category: string;
  content: string;
  slug?: string;
  view?: number;
}

export interface CategoryType {
  id: string;
  name: string;
  image?: string;
}

export interface NavigationItem {
  label: string;
  path: string;
}
