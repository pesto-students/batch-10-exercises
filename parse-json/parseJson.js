
function parseJson(str, filename) {
  try {
    const out = JSON.parse(str);
    return out;
  } catch (e) {
    const p = new Error(e);
    console.log(p.message);
    p.filename = "a.json";
    throw p;
  }
}

export {
  parseJson,
};
