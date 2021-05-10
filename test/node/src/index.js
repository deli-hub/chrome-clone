const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// className toggle
function handleClick() {
  // OLDER VERSION 🤦‍♀️
  /*const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
    title.classList.add(CLICKED_CLASS);
  } else {
    title.className = "";
    title.classList.remove(CLICKED_CLASS);
  }*/

  // OLD VER 👎
  // Class가 "clicked"가 아닌 다른 클래스명도 가지고 있을 수 있음
  /*const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }*/
  
  // NEW VER 👍
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
