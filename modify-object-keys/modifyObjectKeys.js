function modifyObjectKeys(...args) {
  const [o, fn] = [...args];
  const keys = Object.entries(o);

  const newobj = {};
  for (const key of keys) {
    const newKey = fn(key[0]);
    newobj[newKey] = key[1];
  }

  return newobj;
}

export { modifyObjectKeys };
