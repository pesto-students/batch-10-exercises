function getFormValue() {
  event.preventDefault();
  let firstName = document
    .getElementById("nameForm")
    .elements.namedItem("firstName").value;
  let lastName = document
    .getElementById("nameForm")
    .elements.namedItem("lastName").value;
  document.getElementsByClassName(
    "fullName"
  )[0].innerHTML = `Full name is: ${firstName} ${lastName}`;
}
