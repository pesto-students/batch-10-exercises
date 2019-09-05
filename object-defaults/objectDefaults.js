function objectDefaults(inputObj, defaultObj) {
  return { ...defaultObj, ...inputObj };
}

export { objectDefaults };
