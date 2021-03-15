import { shallow } from "enzyme";
import Intro from "../Introduce";

describe("Intro", () => {
  it("Snapshot", () => {
    const component = shallow(<Intro />);

    expect(component).toMatchSnapshot();
  });
});
