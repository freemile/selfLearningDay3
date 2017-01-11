'use strict'
	//create an array of numbers 1 to 20
	Array.prototype.toTwenty = function(){

      for(var i =1; i<=20;i++){
        this.push(i);
      }
      return this;
	};

    //create an array of multiples of 2, from 2 to 40
	Array.prototype.toForty = function(){
	  
	  for(var i = 2;i<=40;i=i+2){
	    
	    this.push(i);
	  }
	  return this;
	};

    //create an array of multiples of 10, from 10 to 1000
	Array.prototype.toOneThousand = function(){
	  for(var i =10; i<=1000;i=i+10){
	    this.push(i);
	  }
	  return this;
	};
    
// implementation of binary search
	Array.prototype.search = function(number){
      var first =0;
	  var last = this.length-1;
	  var n = this.length;
	  var mid = Math.floor(last/2);
	  var output = {count:0, index:-1, length:n};
	  
	  while(first<=last){
	    
	    var mid = Math.floor((first + last)/2);
	    
    //return the index of the array with count=0 if number is the first element in the array
	    if(this[first]==number){
	      
	      output.index=first;
	      return output;
	   //return the index of the array with count=0 if number is the last element in the array 
	    }else if(this[last]==number){
	      
	      output.index=last;
	      return output;
	 //return the index of the array with count=0 if number is the middle element in the array     
	    }else if(this[mid]==number){
	      
	      output.index = mid;
	      return output;
            
	 //implementation of binary search algorithm by reducing where to search to the lower half or the upper half depending on the relationship between mid and number  
            
	    }else if(this[mid]<number){
	      
	      first = mid+1;
	      last -=1;
	      
	    }else{
	      
	      last = mid -1;
	      first +=1;
	      
	    }
	    //increment count at the end of every loop that doesn't find the number 
	    output.count ++;
	    
	  }
	  
    //return the object containing count, index and length of the array    
	  return output;
	  
	}
    
    module.exports= Array;