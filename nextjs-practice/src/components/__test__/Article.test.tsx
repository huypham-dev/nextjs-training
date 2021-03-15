import { mount, shallow } from "enzyme";
import Article from "../Articles/Article";

const article = {
  id: "1",
  createdAt: "2021-03-01T12:59:16.855Z",
  title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  author: "author 1",
  image:
    "https://genk.mediacdn.vn/139269124445442048/2021/3/2/photo-1-16146533712881100681556.jpg",
  category: "internet",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1",
  slug: "slug 1",
  view: 90,
};

describe("Article", () => {
  it("Snapshot", () => {
    const component = shallow(<Article article={article} />);

    expect(component).toMatchSnapshot();
  });

  it("Render component correctly", () => {
    const component = mount(<Article article={article} />);
    expect(
      component.containsMatchingElement(
        <a>Lorem ipsum dolor sit amet, consectetur adipisicing elit</a>
      )
    ).toBeTruthy();
    expect(component.containsMatchingElement(<div>internet</div>)).toBeTruthy();
    expect(
      component.containsMatchingElement(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore ...
        </p>
      )
    ).toBeTruthy();
  });
});
