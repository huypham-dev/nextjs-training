import { shallow } from "enzyme";
import Home, { getStaticProps } from "..";
import { mockArticles, mockCategories } from "constants/mockdata";
import { API } from "utils/api";

const fetchAllCategories = jest.spyOn(API, "fetchAllCategories");
const fetchFeaturedPosts = jest.spyOn(API, "fetchFeaturedPosts");

describe("Home page", () => {
  it("Snapshot", () => {
    const container = shallow(<Home categoryList={[]} featuredPosts={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("getStaticProps should call api", async () => {
    fetchAllCategories.mockImplementationOnce(() =>
      Promise.resolve(mockCategories)
    );
    fetchFeaturedPosts.mockImplementationOnce(() =>
      Promise.resolve(mockArticles)
    );
    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          categoryList: mockCategories,
          featuredPosts: mockArticles,
        },
      })
    );
  });

  it("getStaticProps should handle error", async () => {
    fetchAllCategories.mockImplementationOnce(() =>
      Promise.resolve({
        errorCode: 404,
        message: "Not found",
      })
    );
    fetchFeaturedPosts.mockImplementationOnce(() =>
      Promise.resolve({
        errorCode: 404,
        message: "Not found",
      })
    );
    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          categoryList: [],
          featuredPosts: [],
        },
      })
    );
  });
});
