import React from "react";
import Pokemon from "../Pokemon";
import renderer from "react-test-renderer";

test("Pokemon Snapshots match", () => {
  const propsToPass = {
    id: "60",
    name: "poliwag",
    url: "https://pokeapi.co/api/v2/pokemon/60/"
  };
  const component = renderer.create(<Pokemon pokemon={propsToPass} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
