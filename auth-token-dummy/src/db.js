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
    db.users.reduce((userAuthenticated,dbUserData) =>
      dbUserData.username === username && dbUserData.password === password )
  }
   const checkDb = {
    authenticate({username, password}) {
        return userDataExists(username,password)
    }
    
  }
  module.exports = checkDb;