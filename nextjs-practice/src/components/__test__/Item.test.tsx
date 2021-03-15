import { mount, shallow } from "enzyme";
import Link from "next/link";
import Image from "next/image";
import CategoryItem from "../Categories/Item";

describe("CategoryItem", () => {
  it("Snapshot", () => {
    const component = shallow(
      <CategoryItem imageUrl="/image.jpg" categoryName="mobile" />
    );

    expect(component).toMatchSnapshot();
  });

  it("Render component correctly with props", () => {
    const component = mount(
      <CategoryItem imageUrl="/image.jpg" categoryName="mobile" />
    );
    expect(component.containsMatchingElement(<p>MOBILE</p>)).toBeTruthy();
    expect(component.find(Link).length).toBe(1);
    expect(component.find(Link).prop("href")).toBe("/blog/mobile");
    expect(component.find(Image).prop("src")).toBe("/image.jpg");
  });
});
