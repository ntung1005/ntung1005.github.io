let day = '<option>Ngày</option>';
let month = '<option>Tháng</option>';
let year = '<option>Năm</option>';

for(let i=0;i<=31;i++){
	day+= `<option>${i}</option>`;
}

for(let i=0;i<=12;i++){
	month+= `<option>${i}</option>`;
}

for(let i=2019;i>=1905;i--){
	year+= `<option>${i}</option>`;
}

document.getElementById('day').innerHTML=day;
document.getElementById('month').innerHTML=month;
document.getElementById('year').innerHTML=year;


function condition() {

	let a=true;
	if(document.getElementById('email').value=='^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$') {
		 a=false;
	}
	
	else{
		a;
	}

	if(document.getElementById('ho').value=='a') {
		 a=false;
	}
	
	else{
		a;
	}


}