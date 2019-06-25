function filterRange(array, a, b){
	for(var i = 0; i<array.length; i++){
		if(array[i]==a){
			var newArray = [];
			for(i; i<array.length; i++){
				newArray.push(array[i]);
				if(array[i]==b){
					return newArray;
				}
			}
			
		}
	}
}

var numbers = [1,3,6,4,5,9,8,7,3,2];
var newNumbers = filterRange(numbers, 3, 9);
console.log(newNumbers);