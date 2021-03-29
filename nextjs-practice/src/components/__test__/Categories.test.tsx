import { mount, shallow } from "enzyme";
import { CATEGORIES } from "constants/mockData";
import Categories from "../Categories";
import Item from "../Categories/Item";

describe("Categories", () => {
  it("Snapshot", () => {
    const component = shallow(<Categories data={CATEGORIES} />);
    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(<Categories data={CATEGORIES} />);
    const title = component.find("h1");
    expect(title.text()).toBe("Categories");
    expect(component.find(Item).length).toBe(2);
  });
});
