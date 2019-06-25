function find(arr, value){
	for(var i = 0; i<arr.length; i++){
		if(arr[i]==value){
			return i;
		}
	}
	return -1;
}

var numbers = [4, 5, 7, 8, 7, 10, 2, 1];
console.log(find(numbers, 8));