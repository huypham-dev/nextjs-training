import { mockArticles } from "constants/mockdata";
import { mount, shallow } from "enzyme";
import { API } from "utils/api";
import DetailPost, { getStaticPaths, getStaticProps } from "../post/[id]";

const fetchPostItem = jest.spyOn(API, "fetchPostItem");
const fetchAllPost = jest.spyOn(API, "fetchAllPost");
const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];

describe("Detail page", () => {
  it("Snapshot", () => {
    const container = shallow(<DetailPost post={mockArticles[0]} />);
    expect(container).toMatchSnapshot();
  });

  it("Render correctly with props", () => {
    const container = mount(<DetailPost post={mockArticles[0]} />);

    expect(container.prop("post")).toEqual(mockArticles[0]);
  });

  it("getStaticProps should return props", async () => {
    fetchPostItem.mockImplementationOnce(() =>
      Promise.resolve(mockArticles[0])
    );
    const response = await getStaticProps({ params: { id: "1" } });

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: mockArticles[0],
          error: mockArticles[0],
        },
      })
    );
  });

  it("getStaticPaths should return props with fallback is false", async () => {
    fetchAllPost.mockImplementationOnce(() =>
      Promise.resolve([{ id: "1" }, { id: "2" }])
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
    fetchAllPost.mockImplementationOnce(() =>
      Promise.resolve({
        errorCode: 404,
        message: "Not found",
      })
    );
    const response = await getStaticPaths({});

    expect(response).toEqual(
      expect.objectContaining({
        paths: [],
        fallback: true,
      })
    );
  });
});
