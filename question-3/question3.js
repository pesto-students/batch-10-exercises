function getAttributes() {
  const attributesToGet = ["href", "hreflang", "rel", "target", "type"];
  document.getElementById("valueOfAttributes").innerHTML = attributesToGet
    .map(
      attributeName =>
        `${attributeName} : '${document
          .getElementById("w3r")
          .getAttribute(attributeName)}' <br/>`
    )
    .join("\n");
}
