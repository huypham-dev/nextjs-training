import { navigations } from "constants/mockdata";
import { mount, shallow } from "enzyme";
import Header from "../common/Header";

describe("Header", () => {
  it("Snapshot", () => {
    const component = shallow(<Header navigations={navigations} />);

    expect(component).toMatchSnapshot();
  });

  it("Render correctly with props", () => {
    const component = mount(<Header navigations={navigations} />);

    expect(component.prop("navigations")).toEqual(navigations);
    expect(component.find("li").length).toBe(3);
  });
});
