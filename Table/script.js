let arr=[
    {name:'Robin Huy', born:1990,email:'robinhuy@github.com',phone:123456789},
    {name:'Nguyễn Văn Tuân', born:1991,email:'tuan@github.com',phone:0123455469},
    {name:'Nguyễn Văn Tùng', born:1992,email:'tung@github.com',phone:1234567890},
    {name:'Trần Duy Hậu', born:1993,email:'hau@github.com',phone:156667890},
];

let a='';
for(i=0;i<arr.length;i++){
    a+=`<tr>
    <th scope="row">${arr[i].name}</th>
    <td>${arr[i].born}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].phone}</td>
    <td>
        <ul>
            <li><i class="far fa-edit"></i> Chỉnh sửa </li>
            <li><i class="far fa-trash-alt"></i>Xóa</li>
        </ul>
    </td>
</tr>`
}


document.getElementById('body_table').innerHTML=a;