import { shallow } from "enzyme";
import Footer from "../common/Footer";

describe("Footer", () => {
  it("Snapshot", () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
