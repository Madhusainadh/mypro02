// write js code here corresponding to matches.html

var arr = JSON.parse(localStorage.getItem("schedule"))||[];
myteams(arr)
function filter(){
    var select = document.querySelector("#filterVenue").value;
    var filterlist = arr.filter(function(el){
    return el.venue==select
    })
    myteams(filterlist)
}


function myteams(data){
    document.querySelector("tbody").innerHTML=""
data.forEach(function(el){
    console.log(el.matchNum)
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText=el.matchNum;
    var td2 = document.createElement("td");
    td2.innerText=el.teamA;
    var td3 = document.createElement("td");
    td3.innerText=el.teamB;
    var td4 = document.createElement("td");
    td4.innerText=el.venue;
     var td5 = document.createElement("td");
    td5.innerText=el.date;

    var td6 = document.createElement("td");
    td6.innerText="Favourites";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
        fav(el)
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("#tbod").append(tr)
    
})
    
console.log("kjds")
}
var book = JSON.parse(localStorage.getItem("favourites"))||[];
function fav(el){
    book.push(el)
    localStorage.setItem("favourites",JSON.stringify(book))
}


