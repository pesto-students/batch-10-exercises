// function negativeIndex(list) {
//   if (!Array.isArray(list)) {
//     throw new TypeError('Only arrays are supported');
//   }
//   function validateProp(prop, target) {
//     if (!isNaN(prop)) {
//       prop = parseInt(prop, 10);
//       if (prop < 0) {
//         prop += target.length;
//       }
//     }
//     return prop;
//   }
//   const listProxy = new Proxy(list, {
//     get(target, prop) {
//       const validatedProp = validateProp(prop, target);
//       return target[validatedProp];
//     },
//     set(target, prop, value) {
//       const validatedProp = validateProp(prop);
//       Reflect.set(target, validatedProp, value);
//       return true;
//     }
//   });
//   return listProxy;
// }

// export { negativeIndex };
