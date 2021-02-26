import { RichTextBlock } from "prismic-reactjs";

export interface NavigationType {
  navigation_label: RichTextBlock[];
  navigation_path: RichTextBlock[];
}

export interface FooterDataType {
  leftText: string;
  rightText: string;
}

export interface PostType {
  id: string;
  title: string;
  image: string;
  author: string;
  createdAt: string;
  category: string;
  content: string;
  slug: string;
}

export interface CategoryType {
  id: string;
  name: string;
  image: string;
}

export interface CategoryHeadType {
  heading: string;
  description: string;
}

export interface IntroduceType {
  heading: string;
  intro: string;
  desc: string;
  image: string;
}
