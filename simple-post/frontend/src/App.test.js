import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("< App />", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
  it("renders first div ", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("has 1 h2 header ", () => {
    const app = shallow(<App />);
    expect(app.find("h2").length).toBe(1);
  });
  it("has 2 buttons ", () => {
    const app = shallow(<App />);
    // console.log('wrapper', wrapper);
    // expect(app.find("button")).to.have.lengthOf(2);
    expect(app.find(".btn").length).toBe(2);
  });
  it("has 1 Fragment component", () => {
    const app = shallow(<App />);
    expect(app.find("button").length).toBe(2);
  });
});
