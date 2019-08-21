function convertToRoman(num) {
  var i = 3;
  let romanNumberStartingString = "";

  if (isNaN(num)) {
    return NaN;
  }
  const digitsOfNumInString = String(+num).split("");
  const key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
  ];

  while (i--) {
    romanNumberStartingString = (key[+digitsOfNumInString.pop() + (i * 10)] || "") + romanNumberStartingString;
  }
  var romanNumberFinalString = Array(+digitsOfNumInString.join("") + 1).join("M") + romanNumberStartingString;

  return romanNumberFinalString;
}

export {
  convertToRoman,
};