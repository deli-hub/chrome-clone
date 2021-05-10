// 두 개의 변수를 한 번에 선언해준다.
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
      
function getTime() {
  const date = new Date();
  const hours  = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText =
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 현재 시간을 얻음
function init() {
  // setInterval(fn, interval);
  getTime();
  // 함수를 호출할 때 괄호를 붙이면 호출과 동시에 실행하라는 뜻이고,
  // 괄호가 없을 경우 내가 필요할 때 실행하라는 의미이다.
  setInterval(getTime, 1000);
}

init();
