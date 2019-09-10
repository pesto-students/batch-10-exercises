
function slugUrl(inputUrl) {
  const reg = RegExp('/[\W| ]+/g');
  return inputUrl.trim().toLowerCase().replace('/[\W| ]+/g', '-');
}

export {
  slugUrl,
};
