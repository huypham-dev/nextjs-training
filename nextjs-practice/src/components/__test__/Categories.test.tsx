import { mount, shallow } from "enzyme";
import Categories from "../Categories";
import Item from "../Categories/Item";
import { mockCategories } from "constants/mockdata";

describe("Categories", () => {
  it("Snapshot", () => {
    const component = shallow(<Categories data={mockCategories} />);
    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(<Categories data={mockCategories} />);
    const title = component.find("h1");
    expect(title.text()).toBe("Categories");
    expect(component.find(Item).length).toBe(2);
  });
});
