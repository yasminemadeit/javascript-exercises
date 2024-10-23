const removeFromArray = function(array, ...args) {
	const argsArray = Array.from(args);
	for(let i=array.length-1; i>=0; i--){
          for (let j=0; j<argsArray.length; j++){
              if (array[i]===argsArray[j]){
                  array.splice(i,1);
              }
          }
      }
      
     
      return array;
};

// Do not edit below this line
module.exports = removeFromArray;
