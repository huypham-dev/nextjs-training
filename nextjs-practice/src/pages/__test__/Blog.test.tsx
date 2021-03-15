import { mount, shallow } from "enzyme";
import Blog, { getStaticPaths, getStaticProps } from "../blog/[[...path]]";
import { mockArticles, mockCategories } from "constants/mockdata";
import { API } from "utils/api";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");
const fetchPostsByCategory = jest.spyOn(API, "fetchPostsByCategory");
const fetchAllPost = jest.spyOn(API, "fetchAllPost");
const fetchAllCategories = jest.spyOn(API, "fetchAllCategories");
const paths = [
  { params: { path: ["mobile"] } },
  { params: { path: ["internet"] } },
  { params: { path: [] } },
];

beforeEach(() => {
  useRouter.mockImplementationOnce(() => ({
    query: { path: ["mobile"] },
  }));
});

describe("Blog page", () => {
  it("Snapshot", async () => {
    const container = shallow(
      <Blog categories={mockCategories} posts={mockArticles} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Render page correctly with props", () => {
    const container = mount(
      <Blog categories={mockCategories} posts={mockArticles} />
    );

    expect(container.prop("categories")).toEqual(mockCategories);
    expect(container.prop("posts")).toEqual(mockArticles);
  });

  it("getStaticProps should return props with all posts", async () => {
    fetchAllPost.mockImplementationOnce(() => Promise.resolve(mockArticles));
    fetchAllCategories.mockImplementationOnce(() =>
      Promise.resolve(mockCategories)
    );
    const response = await getStaticProps({ params: { path: null } });

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: mockArticles,
          categories: mockCategories,
          error: mockArticles,
        },
      })
    );
  });

  it("getStaticProps should return props with posts by category", async () => {
    fetchPostsByCategory.mockImplementationOnce(() =>
      Promise.resolve(mockArticles)
    );
    fetchAllCategories.mockImplementationOnce(() =>
      Promise.resolve(mockCategories)
    );
    const response = await getStaticProps({ params: { path: "mobile" } });

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: mockArticles,
          categories: mockCategories,
          error: mockArticles,
        },
      })
    );
  });

  it("getStaticPaths should return props with fallback is false", async () => {
    fetchAllCategories.mockImplementationOnce(() =>
      Promise.resolve(mockCategories)
    );
    const response = await getStaticPaths({});

    expect(response).toEqual(
      expect.objectContaining({
        paths,
        fallback: false,
      })
    );
  });

  it("getStaticPaths should return props with fallback is true", async () => {
    fetchAllCategories.mockImplementationOnce(() =>
      Promise.resolve({
        errorCode: 404,
        message: "Not found",
      })
    );
    const response = await getStaticPaths({});

    expect(response).toEqual(
      expect.objectContaining({
        paths: [{ params: { path: [] } }],
        fallback: true,
      })
    );
  });
});
