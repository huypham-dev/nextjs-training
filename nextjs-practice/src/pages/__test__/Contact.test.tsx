import { shallow } from "enzyme";
import Contact from "../contact";

describe("Contact page", () => {
  it("Snapshot", () => {
    const container = shallow(<Contact />);

    expect(container).toMatchSnapshot();
  });
});
