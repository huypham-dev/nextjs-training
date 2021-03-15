import { shallow } from "enzyme";
import NotFound from "../404";

describe("404 page", () => {
  it("Snapshot", () => {
    const container = shallow(<NotFound />);

    expect(container).toMatchSnapshot();
  });
});
