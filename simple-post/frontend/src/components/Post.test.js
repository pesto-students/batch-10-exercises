import React from "react";
import ReactDOM from "react-dom";
import Post from "./Post";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("< Post />", () => {
  const post = {
    id: 10,
    title: "Post Primary Title"
  };
  const app = shallow(<Post post={post} />);
  it("renders first div ", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Post post={post} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("has 1 h4 header ", () => {
    expect(app.find("h4").length).toBe(1);
  });
  it("recieves correct props ", () => {
    expect(
      app.find({
        prop: {
          id: 10,
          title: "Post Primary Title"
        }
      })
    ).to.have.lengthOf(1);
  });
  //   it("has 1 Fragment component", () => {
  //     const app = shallow(<App />);
  //     expect(app.find("button")).to.have.lengthOf(2);
  //   });
});
