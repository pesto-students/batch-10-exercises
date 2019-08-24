/* eslint-disable no-param-reassign */

function lowercaseKeys(object) {
  const addToObjectWithLowerCase = (obj, key) => {
    obj[key.toLowerCase()] = object[key];
    return obj;
  };
  const lowerCasedObject = Object.keys(object).reduce(addToObjectWithLowerCase, {});
  return lowerCasedObject;
}

export {
  lowercaseKeys,
};
