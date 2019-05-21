let day = '<option>Ngày</option>';
let month = '<option>Tháng</option>';
let year = '<option>Năm</option>';

for(let i=1;i<=31;i++){
	day+= `<option>${i}</option>`;
}

for(let i=1;i<=12;i++){
	month+= `<option>${i}</option>`;
}

for(let i=2019;i>=1905;i--){
	year+= `<option>${i}</option>`;
}

document.getElementById('day').innerHTML=day;
document.getElementById('month').innerHTML=month;
document.getElementById('year').innerHTML=year;

