import { mount, shallow } from "enzyme";
import CategoriesWidget from "../CategoriesWidget";
import { mockCategories } from "constants/mockdata";

describe("CategoriesWidget", () => {
  it("Snapshot", () => {
    const component = shallow(<CategoriesWidget data={[]} />);
    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(<CategoriesWidget data={mockCategories} />);
    const links = component.find("a");

    expect(component.find("h3").text()).toBe("Categories");
    expect(component.find("a").length).toBe(2);
    expect(links.at(0).text()).toBe("MOBILE");
    expect(links.at(1).text()).toBe("INTERNET");
  });
});
