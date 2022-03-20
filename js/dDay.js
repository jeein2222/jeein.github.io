const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const dDay = new Date(2022, 11, 31); //월은 0부터
  //Date.now()와 new Date()는 1970년 1월 1일 00:00:00 UTC로부터 
  //지난 시간을 밀리초 단위의 숫자 값으로 반환합
  const gap = dDay.getTime() - Date.now(); 

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor(gap % (1000 * 60 * 60 * 24)/(1000*60*60));
  const minutes = Math.floor(gap % (1000 * 60 * 60)/(1000*60));
  const seconds = Math.floor(gap % (1000 * 60)/1000);

  clockTitle.innerHTML=` ${days}days ${hours}hours ${minutes}min ${seconds}sec left...😂`
}

getClock();
setInterval(getClock, 1000);
