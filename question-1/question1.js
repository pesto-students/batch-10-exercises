function js_style() {
  let textColor = document.getElementById("text").style.color;
  if (textColor == "red") {
    textColor = "green";
  } else {
    textColor = "red";
  }
  document.getElementById("text").style.color = textColor;
}