class Country{
    constructor(ID,Name,CountryName){
        this.id= ID;
        this.name=Name;
        this.country=CountryName;

    }
};

let countryList=[]
document.querySelector('#addBtn').addEventListener('click',()=>{

let ID=document.querySelector('#ID');
let Name=document.querySelector('#name');
let CountryName=document.querySelector('#country');
countryList.push(new Country(ID.value,Name.value,CountryName.value));

console.log(countryList);
dispalYCountry()
// console.log(new Country(ID.value,Name.value,CountryName.value));
})

function dispalYCountry() {
    let element=`<tr class="bg-primary text-white">
    <th class="" colspan="3">List of city</th>
</tr>
<tr  class="bg-primary text-white">
    <td>ID</td>
    <td>Name</td>
    <td>Country</td>

</tr>`;
    countryList.forEach((e)=>{
element+=`  <tr  class="bg-primary text-white">
<td>${e.id}</td>
<td>${e.name}</td>
<td>${e.country}</td>

</tr>`
    });
  document.querySelector('#countryTable').innerHTML=element;
  document.querySelector('#ID').value='';
document.querySelector('#name').value='';
document.querySelector('#country').value='0';
}
