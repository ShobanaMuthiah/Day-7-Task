
//Get all the countries from Asia continent /region using Filter function
const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
    var data = request.response;
    var result = JSON.parse(data);
    var res = result.filter((ele)=>ele.region==="Asia" || ele.continents[0]==="Asia");
    console.log("Asian countries:\n\n");
    res.forEach((ele)=>console.log(ele.name.common));
}
// Get all the countries with a population of less than 2 lakhs using Filter function
const request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function()
{
    var data1 = request1.response;
    var result1 = JSON.parse(data1);
    var res1 = result1.filter((ele)=>ele.population<200000);
    console.log("\n\nThe countries with population of less than 2 lakhs(2,00,000):\n\n");
    res1.forEach((ele)=>console.log(ele.name.common+" has population "+ele.population));
}
//Print the following details name, capital, flag, using forEach function
const request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload=function()
{
    var data2 = request2.response;
    var result2 = JSON.parse(data2);
    console.log("\n\nprinting country name, capital, flag:\n\n");
    result2.forEach((ele)=>console.log("'country name': "+ele.name.common+" 'Capital' "+ele.capital+" 'flag': "+ele.flag));
}
//Print the total population of countries using reduce function
const request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload=function()
{
    var data3 = request3.response;
    var result3 = JSON.parse(data3);
    console.log("\n\nTotal Population of all countries:");
    var res3 = result3.reduce((sum,i)=>{return sum+i.population},0);
    console.log(res3);
}
//Print the country that uses US dollars as currency.
const request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload=function()
{
    var data4 = request4.response;
    var result4 = JSON.parse(data4);
    console.log("US Dollar used countries:\n\n");
    result4.forEach((ele) => {
        if (ele.currencies && ele.currencies.USD) {
            console.log(ele.name.common);
        }});
}







