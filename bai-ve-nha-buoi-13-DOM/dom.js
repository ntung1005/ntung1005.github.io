//Bài 1

function changeFontSize(x){
	var a = document.getElementsByTagName("p");
	for (let i = 0; i < a.length; i++) {
	    a[i].style.fontSize = x+'px';
  }
}

var min=6;
var max=28;

//Bài 2

function increaseFontSize() {

	var p = document.getElementById('p1');
	 
		if(p.style.fontSize) {
		var s = parseInt(p.style.fontSize);
		} else {
	 
		var s = 17;
		}

		if(s!=max) {
	 
			s += 1;
		}

	p.style.fontSize = s+"px"
	 
}

//Bài 3

function decreaseFontSize() {
	var p = document.getElementById('p2');
	 
	if(p.style.fontSize) {
	var s = parseInt(p.style.fontSize);
	} else {
	 
	var s = 17;
	}
	if(s!=min) {
	 
	s -= 1;
	}
	p.style.fontSize = s+"px"

}

//Bài 4

function changeColor(){
	document.getElementById("p1").style.color = "green";
	document.getElementById("p2").style.color = "orange";
	document.getElementById("p3").style.color = "red";

}

//Bài 5

function changeBackGroundColor(){
	document.getElementById("p").style.background = "purple";

}

//Bài 6

function copyContent() {
  	p1.innerText=p2.innerText;
}