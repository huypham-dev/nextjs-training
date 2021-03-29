export const ROUTES = {
  home: {
    path: "/",
  },
  blog: {
    path: "/blog",
    withId: (id: string) => `/blog/${id}`,
  },
  post: {
    path: "/post",
    withId: (id: string) => `/post/${id}`,
  },
  contact: {
    path: "/",
  },
};
