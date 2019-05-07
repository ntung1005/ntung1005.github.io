//Bài 1:
function bai1(arr) {
	arr.sort(function(a,b){return b-a})
	return arr[1];
}

//Bài 2:
function bai2(arr){
	for(i=0;i<arr.length-1;i++){
		s = arr[0];
		if (arr[i].length>arr[0].length) {
			s= arr[i];
		}

	}
	return s;

}

//Bài 3:
function bai3(str , target){
	if(str==str.slice(0,str.length-target.length) + target){
		return true;
	}
	else{
		return false;
	}
}

//Bài 4:
function bai4(arr) {
    for (let i = 0; i <arr.length; i++) {
        for (let j = i + 1; j <arr.length; j++) {
            if (arr[i] === arr[j]){
         	   return false;
        	}          
        }
    }
    return true;
}

//bài 5
function bai5(tagName) {
  return (document.getElementsByTagName(tagName)).length;
}