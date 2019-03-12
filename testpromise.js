test('should test the user exusts',function(assert){
    userList=['abc','xyz'];
    let checkUser=isAuthorisedPromise('abc1');
     return  checkUser.then((result)=>{
        assert.equal(result,true);

        
    })
})

// test('should test the user doesn\'t exist',function(assert){
//     userList=['abc','xyz'];
//     let checkUser=isAuthorisedPromise('abc1');
//      return  checkUser.then((result)=>{
//         assert.equal(result,false);

        
//     })
// })
// test('should throw error-->null case',function(assert){
//     userList=null;
//     let checkUser=isAuthorisedPromise('abc1');
//      return  checkUser.then((result)=>{
//         assert.equal(result,false);

        
//     })
// })