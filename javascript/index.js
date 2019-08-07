
  console.log('before')

  recupUser(12).then(user => {
      console.log(user);
  })
  .catch(error => console.log('error:'+error))
 
  console.log('after')


  function recupUser(id) {

    return new Promise((resolve, reject) => {

        if(false) {
            setTimeout(() => {
                console.log('retreive user from database');
                return resolve({id: id, username: "idbrahimdev"});
            }, 2000); 
        }
        else {
            reject('user not found')
        }
    }) 

    
}