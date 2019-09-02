function updateInventory(arr1, arr2) {
  const getEntry = name => {
    for (const item of arr1) {
      if (item[1] === name) return item;
    }
  };

  arr2.forEach(x => {
    const match = getEntry(x[1]);
    if (match) {
      match[0] += x[0];
    } else {
      arr1.push(x);
    }
  });

  arr1.sort((a, b) => {
    const x = a[1].toLowerCase();
    const y = b[1].toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  return arr1;
}

export { updateInventory };
