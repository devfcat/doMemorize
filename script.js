function resize(obj) {
  obj.style.height = "1px";
  obj.style.height = 12 + obj.scrollHeight + "px";
}

//   function coloring(obj) {
//     obj.style.backgroundColor = "pink";
//   }

//   function add() {
//     $(".memo").append(
//       "<textarea class='memoInput' onkeydown='resize(this)' onkeyup='resize(this)'>" +
//         "</textarea>"
//     );
//   }
const newBtn = document.createElement("button");

newBtn.addEventListener("click", () => {
  newLi.classList.toggle("complete");
});

const addBtn = document.querySelector("#addBtn"); // 추가 버튼 선택

addBtn.addEventListener("click", () => {
  // + 버튼으로 추가
  if (todoInput.value !== "") {
    // 빈 값 입력 방지
    createMemo();
  }
});

function createMemo() {
  // 할 일 추가 기능
  const memoList = document.querySelector("#memoList");
  const newLi = document.createElement("li"); // li 생성
  const newBtn = document.createElement("button"); // button 생성
  const newSpan = document.createElement("span"); // span 생성
  const memoInput = document.querySelector("#memoInput");

  newLi.appendChild(newBtn); // li안에 button 담기
  newLi.appendChild(newSpan); // li안에 span 담기

  newSpan.textContent = memoInput.value; // span 안에 value값 담기

  memoList.appendChild(newLi);

  memoInput.value = ""; // value 값에 빈 문자열 담기

  newBtn.addEventListener("click", () => {
    // 체크박스 클릭시 완료 표시
    newLi.classList.toggle("complete");
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
  });
}
