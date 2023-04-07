function setClock() {
  let dateInfo = new Date();
  let hour = modiNum(dateInfo.getHours());
  let min = modiNum(dateInfo.getMinutes());
  let sec = modiNum(dateInfo.getSeconds());
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth(); 
  let date = dateInfo.getDate();
  const datetext = document.getElementById("date");
  datetext.innerHTML = `${year} +"년" + ${month} + "월" + ${date} + "일"`;
  const timetext = document.getElementById("time");
  timetext.innerHTML = hour +":"+ min +":"+ sec;

}
function modiNum(time){
  if(parseInt(time)<10) {
    return "0"+ time;
  }else 
    return time;
  
};
window.onload= function() {
  setClock();
  setinterval(setClock,1000);
}