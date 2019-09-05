
function bouncer(list) {
  return list.filter( ( item )=>{ 
    if(item){
      return item;
    }
  });
}

export {
  bouncer,
};
