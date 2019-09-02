function bouncer(valuesArray) {
  const notFalsyValues = valuesArray.filter(Boolean);
  return notFalsyValues;
}

export {
  bouncer,
};