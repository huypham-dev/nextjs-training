import { mount, shallow } from "enzyme";
import { ARTICLES } from "constants/mockData";
import Articles from "../Articles/index";

describe("Articles", () => {
  it("Snapshot", () => {
    const component = shallow(<Articles data={[]} />);

    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(<Articles data={ARTICLES} />);
    const articleList = component.find("article");

    expect(articleList.length).toBe(2);
  });
});
