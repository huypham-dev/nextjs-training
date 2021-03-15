import { shallow } from "enzyme";
import Button from "../common/Button";

describe("Button", () => {
  it("Snapshot", () => {
    const component = shallow(<Button onClick={jest.fn()} label="Click" />);

    expect(component).toMatchSnapshot();
  });

  it("Render correctly with props", () => {
    const onClick = jest.fn();
    const component = shallow(<Button onClick={onClick} label="Click" />);

    expect(
      component.containsMatchingElement(<button>Click</button>)
    ).toBeTruthy();
    component.simulate("click");
    expect(onClick).toBeCalledTimes(1);
  });
});
