// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",matchsubmit)
var matchArr = [];
function matchsubmit(){
    event.preventDefault();

    var matchObj = {
      matchNumber : masaiForm.matchNum.value,
      team1 : masaiForm.teamA.value,
      team2:masaiForm.teamB.value,
      matchDay:masaiForm.date.value,
      stadium:masaiForm.venue.value
    };
    matchArr.push(matchObj);

    localStorage.setItem ("schedule",JSON.stringify(matchArr))
    window.location.href = "matches.html"
}