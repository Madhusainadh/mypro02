// write js code here corresponding to favourites.html
var arr = JSON.parse(localStorage.getItem("favourites"))||[];
myteams(arr)
function myteams(data){
    // document.querySelector("tbody").innerHTML=""
data.forEach(function(el,index){
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
    td6.innerText="Delete";
    td6.style.color="red";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
        del(el,index)
    })
    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
    
})
    
console.log("kjds")
}
function del(el,index){
    arr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(arr))
    window.location.reload();
}