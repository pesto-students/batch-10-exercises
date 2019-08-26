
function rejectPromise(args) {
  return new Promise((resolve , reject)=>{
    return resolve('REJECTED!');
  })
}

export {
  rejectPromise,
};
