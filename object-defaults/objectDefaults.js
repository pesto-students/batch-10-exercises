function objectDefaults(obj, obj2) {
  const merged = { ...obj2, ...obj };
  return merged;
}

export { objectDefaults };
