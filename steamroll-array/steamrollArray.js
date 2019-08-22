function steamrollArray(nestedArray, flatArray = []) {
  for (const value of nestedArray) {
    if (Array.isArray(value)) {
      steamrollArray(value, flatArray);
    } else {
      flatArray.push(value);
    }
  }

  return flatArray;
}

export { steamrollArray };
