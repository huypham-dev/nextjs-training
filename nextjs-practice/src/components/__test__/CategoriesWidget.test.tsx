import { mount, shallow } from "enzyme";
import { CATEGORIES } from "constants/mockData";
import CategoriesWidget from "../CategoriesWidget";

describe("CategoriesWidget", () => {
  it("Snapshot", () => {
    const component = shallow(<CategoriesWidget data={[]} />);
    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(<CategoriesWidget data={CATEGORIES} />);
    const links = component.find("a");

    expect(component.find("h3").text()).toBe("Categories");
    expect(component.find("a").length).toBe(2);
    expect(links.at(0).text()).toBe("MOBILE");
    expect(links.at(1).text()).toBe("INTERNET");
  });
});
