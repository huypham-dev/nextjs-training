import { mount, shallow } from "enzyme";
import Articles from "../Articles/index";
import { mockArticles } from "constants/mockdata";

describe("Articles", () => {
  it("Snapshot", () => {
    const component = shallow(<Articles data={[]} />);

    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(<Articles data={mockArticles} />);
    const articleList = component.find("article");

    expect(articleList.length).toBe(2);
  });
});
