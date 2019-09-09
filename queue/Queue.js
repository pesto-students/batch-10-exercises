
class Queue{
  constructor(){
    this.inputs = [];
    this.linkedList = {};
  }
  enqueue( value ){
    this.inputs.push( value );
  }
  dequeue(){
    return this.inputs.shift();
  }
  toString(){
    return this.inputs.join(',');
  }
}

export {
  Queue,
};
