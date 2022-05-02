// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"));
displayData(matchArr);
favouriteArr = JSON.parse(localStorage.getItem("favourites")) || [];


function handlestadiumFilter() {
    var selected = document.querySelector("#filterVanue").value;
    

    var filteredList = jobArr.filter(function (elem) {
      return elem.personRole == selected;
    });

   // console.log(filteredList);
    displayData(filteredList);
  }


function displayData(data){
    document.querySelector("tbody").innerHTML="";
   
    data.forEach(function(elem){
        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.matchNumber

        var td2 = document.createElement("td")
        td2.innerText = elem.team1
        var td3 = document.createElement("td")
        td3.innerText = elem.team2

        var td4 = document.createElement("td")
        td4.innerText = elem.matchDay

        var td5 = document.createElement("td")
        td5.innerText = elem.stadium

        var td6 = document.createElement("td")
        td6.innerText = "Favourites"
        td6.style.color = "green"
        td6.addEventListener("click",function(){
            favouriteFun(elem);
        });
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
        

    })
}

function favouriteFun(elem){
    favouriteArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
}