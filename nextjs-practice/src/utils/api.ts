const BASE_URL = "https://5f7c244700bd74001690a4a7.mockapi.io";
export const COLLECTION = {
  CATEGORIES: "/categories",
  POSTS: "/posts",
};

export const API = {
  fetchAllCategories: () => {
    return fetch(`${BASE_URL}${COLLECTION.CATEGORIES}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => responseJson)
      .catch((error) => {
        console.log(error);
      });
  },
  fetchPostsByCategory: (categoryId) => {
    return fetch(`${BASE_URL}${COLLECTION.POSTS}?category=${categoryId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => responseJson)
      .catch((error) => {
        console.log(error);
      });
  },
  fetchPostItem: (id) => {
    return fetch(`${BASE_URL}${COLLECTION.POSTS}/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong"); 
        }
      })
      .then((responseJson) => responseJson)
      .catch((error) => {
        console.log(error);
      });
  },
};
