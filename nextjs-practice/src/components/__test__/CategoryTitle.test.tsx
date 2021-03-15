import { mount, shallow } from "enzyme";
import CategoryTitle from "../CategoryTitle";

describe("CategoryTitle", () => {
  it("Snapshot", () => {
    const component = shallow(<CategoryTitle category="Internet" />);

    expect(component).toMatchSnapshot();
  });

  it("Render correctly title", () => {
    const component = mount(<CategoryTitle category="Internet" />);
    const title = component.find("h1").text();
    const desc = component.find("p").text();

    expect(title).toBe("INTERNET");
    expect(desc).toBe("Catch up on the latest news and updates.");
  });
});
