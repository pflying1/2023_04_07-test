function setClock() {
  let dateInfo = new Date();
  let hour = modiNum(dateInfo.getHours());
  let min = modiNum(dateInfo.getMinutes());
  let sec = modiNum(dateInfo.getSeconds());
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth(); 
  let date = dateInfo.getDate();
  const datetext = document.getElementById("date");
  datetext.innerHTML = year +"-" + month + "-" + date +"오전"+ hour + "시" + min +"분" + sec ;
  console.log(datetext)
}
function modiNum(time){
  if(parseInt(time)<10) {
    return "0"+ time;
  }else 
    return time;
  
};
onload = function() {
  setClock();
  setinterval(setClock,1000);
}