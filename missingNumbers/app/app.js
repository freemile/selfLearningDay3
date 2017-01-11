'use strict'
function findMissing(arr1,arr2){
  
  var array1 = arr1;
  var array2 = arr2;
  var missingNumber = 0;
 
//return zero if both array's are zero
  if((array1 && array2) == []){
    
    return missingNumber;
   //return zero if both array's are equal 
  }else if(array1.length == array2.length){
    
    return missingNumber;
    
  }else{
   // find the missing number. assume that array 2 is the larger array, 
    // loop through the arrays and convert the non missing numbers in array2 to 0
      for (var j = 0; j<array2.length;j++){
        for (var i = 0; i<array1.length;i++){

          if (array2[j] == array1[i] ){
            array2[j] = 0;
          }
        }
      }
      
    //through the array2 and return the non zero number as the missing number
      for(var loop =0; loop < array2.length; loop++ ){

        if(array2[loop]>0){
            missingNumber = array2[loop];
            return missingNumber;
        }

    }

  }
}
module.exports= findMissing;
