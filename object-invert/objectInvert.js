function objectInvert(obj) {
  const newObj = {};

  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[obj[prop]] = prop;
    }
  }

  return newObj;
}

export { objectInvert };
