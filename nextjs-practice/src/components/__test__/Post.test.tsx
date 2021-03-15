import { mockArticles } from "constants/mockdata";
import { mount, shallow } from "enzyme";
import Link from "next/link";
import Image from "next/image";
import Post from "../Featured/Post";

describe("Post", () => {
  it("Snapshot", () => {
    const component = shallow(<Post post={mockArticles[0]} />);

    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(<Post post={mockArticles[0]} />);
    expect(component.find("p").text()).toBe("90 views");
    expect(component.find(Link).length).toBe(1);
    expect(component.find(Link).prop("href")).toBe("/post/1");
    expect(component.find(Image).prop("src")).toBe(
      "https://genk.mediacdn.vn/139269124445442048/2021/3/2/photo-1-16146533712881100681556.jpg"
    );
  });
});
