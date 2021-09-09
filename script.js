//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
var  request= new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET','https://restcountries.eu/rest/v2/all',true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);


var casia=data.filter((element)=>element.region==='Asia');
console.log(casia);


var popu=data.filter((element)=>element.population<200000);
console.log(popu);

data.forEach((element)=>{console.log(`${element.name} ${element.capital} ${element.flag}`)})

var result=data.reduce((acc,ele)=>{
   
    return acc+ele.population;
},0);
console.log(result);

let cusd=data.filter((ele)=>{
    for(let i in ele.currencies){
        if(ele.currencies[i].code==='USD'){
            return true;
        }
    }
    }).map((ele)=>ele.name);
    console.log(cusd);


}

//print the country which uses usd as their currency....

