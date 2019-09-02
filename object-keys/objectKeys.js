function objectKeys(obj) {
  const keys = [];
  for (const k in obj) {
    keys.push(k);
  }
  return keys;
}

export { objectKeys };
