function getAttributes() {
  const link = document.querySelector('#w3r');
  const attributes = [...link.attributes];
  attributes.forEach(attr => {
    console.log(`${attr.name} :${attr.value}`);
  });
}
