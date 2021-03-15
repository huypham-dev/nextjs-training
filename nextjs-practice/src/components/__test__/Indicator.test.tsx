import { shallow } from "enzyme";
import Indicator from "../Indicator";

describe("Indicator", () => {
  it("Snapshot", () => {
    const component = shallow(<Indicator />);

    expect(component).toMatchSnapshot();
  });
});
