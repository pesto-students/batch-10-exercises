
function sequentialPromise(promises) {
  const PromiseList = managePromise(promises);
  let results = [];
  promises.forEach(()=>results.push(  PromiseList.next().value ));
  return results.join('');
}

function* managePromise(promises){
  promises.forEach(element => {
    yield element;
  });

}

export {
  sequentialPromise,
};
