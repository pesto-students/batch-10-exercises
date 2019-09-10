const  fs = require('fs');


const  csvToJson = async (filePath) => {
  const fileData = fs.readFileSync(filePath , 'utf-8');
  const linesInFile = fileData.split('\n');
  const keysList = linesInFile.shift().split(',');

  const responseData = [];

  linesInFile.forEach((element , index) => {
    let arrayOfData = element.split(',');
    responseData.push(returnObject(arrayOfData , keysList))
  });

  return responseData;
}

const returnObject = (array , keysList) => {
  let obj = {};
  for(let i = 0; i < keysList.length ; i++){
      let keyName = keysList[i];
      obj[ keyName ] =  array[i];
  }
  return obj;
}

export {
  csvToJson,
};
