import { mount, shallow } from "enzyme";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Layout from "../common/Layout";

describe("Layout", () => {
  it("Snapshot", () => {
    const component = shallow(
      <Layout>
        <div>Children</div>
      </Layout>
    );

    expect(component).toMatchSnapshot();
  });

  it("Render correctly", () => {
    const container = mount(
      <Layout>
        <div>Children</div>
      </Layout>
    );

    expect(container.find(Header).length).toBe(1);
    expect(container.find(Footer).length).toBe(1);
  });
});
