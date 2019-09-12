const db = {
    users:[
      {
        username: 'jon_snow',
        password: 'INoKnowthing',
      },
      {
        username: 'don',
        password: 'MeinHunDon',
      },
    ]
  }
  const userDataExists = ({username,password}) => 
  {
    db.users.reduce((userAuthenticated,dbUserData,index,arr) =>
    {
        if (userAuthenticated === true) arr.splice(1);
        return userAuthenticated || dbUserData.username === username && dbUserData.password === password   
    }
      , false)
  }
   const checkDb = {
    authenticate({username, password}) {
        return userDataExists(username,password)
    }
    
  }
  module.exports = checkDb;