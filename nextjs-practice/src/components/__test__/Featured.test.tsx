import { mount, shallow } from "enzyme";
import { ARTICLES } from "constants/mockData";
import Featured from "../Featured";
import Post from "../Featured/Post";

describe("Featured", () => {
  it("Snapshot", () => {
    const component = shallow(<Featured featuredPosts={ARTICLES} />);

    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(<Featured featuredPosts={ARTICLES} />);
    const posts = component.find(Post).length;
    const title = component.find("h3").at(0).text();

    expect(posts).toBe(2);
    expect(title).toBe("Featured Posts");
  });
});
