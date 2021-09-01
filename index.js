function superbowlWin(record){
   // iterate through object keys, looking for W's
   // return the key that is associated with the W
   // if no W then return undefined
   // the arguemnt will be the array, which is full of objects. 
   // we need to iterate through the array, and each object
   // .find iterates, and returns when the callback function's parameter is met
    const foundWin = record.find((element)=>{
          if (element.result === 'W'){
              return true;
          }         
      })
    if (foundWin != undefined){
        return foundWin.year;
    }
    else{
        return undefined;
    }   
}
      


