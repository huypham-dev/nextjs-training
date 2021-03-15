const BASE_URL = "https://5f7c244700bd74001690a4a7.mockapi.io";
export const COLLECTION = {
  CATEGORIES: "/categories",
  POSTS: "/posts",
};

export const API = {
  fetchAllCategories: async () => {
    const res = await fetch(`${BASE_URL}${COLLECTION.CATEGORIES}`);

    return res.ok
      ? await res.json()
      : {
          errorCode: res.status,
          message: res.statusText,
        };
  },
  fetchPostsByCategory: async (categoryId) => {
    const res = await fetch(
      `${BASE_URL}${COLLECTION.POSTS}?category=${categoryId}`
    );

    return res.ok
      ? await res.json()
      : {
          errorCode: res.status,
          message: res.statusText,
        };
  },
  fetchAllPost: async () => {
    const res = await fetch(`${BASE_URL}${COLLECTION.POSTS}`);
    return res.ok
      ? await res.json()
      : {
          errorCode: res.status,
          message: res.statusText,
        };
  },
  fetchPostItem: async (id) => {
    const res = await fetch(`${BASE_URL}${COLLECTION.POSTS}/${id}`);
    return res.ok
      ? await res.json()
      : {
          errorCode: res.status,
          message: res.statusText,
        };
  },

  fetchFeaturedPosts: async () => {
    const res = await fetch(
      `${BASE_URL}${COLLECTION.POSTS}?sortBy=view&order=desc&p=1&l=6`
    );
    return res.ok
      ? await res.json()
      : {
          errorCode: res.status,
          message: res.statusText,
        };
  },
};
