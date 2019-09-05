function updateInventory(firstArray, secondArray) {
  const inventoryMap = new Map();
  [...firstArray, ...secondArray].forEach(element => {
    let value = element[0];
    const keyString = element[1];
    if (inventoryMap.has(keyString)) {
      value += inventoryMap.get(keyString);
    }
    inventoryMap.set(keyString, value);
  });
  const outputArr = [];
  for (const item of inventoryMap) {
    outputArr.push([item[1], item[0]]);
  }
  outputArr.sort((a, b) => a[1] > b[1]);
  return outputArr;
}

export { updateInventory };
