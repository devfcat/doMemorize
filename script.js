let lightState = true;

function resize(obj) {
  obj.style.height = "1px";
  obj.style.height = 12 + obj.scrollHeight + "px";
}

const newBtn = document.createElement("button");

newBtn.addEventListener("click", () => {
  newLi.classList.toggle("complete");
});

function memoListModDark() {
  const liList = document.querySelectorAll("#memoList li");
  for (let i = 0; i < liList.length; i++) {
    $(liList[i]).css("background-color", "#2E2E2E");
    $(liList[i]).css("filter", "drop-shadow(0px 0px 5px #2E2E2E)");
    $(liList[i]).css("border", "1px solid #2E2E2E");
    $(liList[i]).css("color", "white");
    $("#memoList button").css("background-color", "#7d7d7d");
  }
}
function memoListModLight() {
    const liList = document.querySelectorAll("#memoList li");
    for (let i = 0; i < liList.length; i++) {
      $(liList[i]).css("background-color", "white");
      $(liList[i]).css("filter", "drop-shadow(0px 0px 5px #e1dede)");
      $(liList[i]).css("border", "1px solid #e7e7e7");
      $(liList[i]).css("color", "black");
      $("#memoList button").css("background-color", "#f0f0f0");
    }
  }

const addBtn = document.querySelector("#addBtn"); // 추가 버튼 선택

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
    $(newLi).fadeOut(500, "linear", function () {});
    setTimeout(function () {
      newLi.remove();
    }, 501);
  });

  if (lightState == false) {
    //다크모드일때 검정색 메모박스 생성.
    memoListModDark();
  } else {
  }
}

function deleteAll() {
  // 전체 삭제 버튼
  const liList = document.querySelectorAll("#memoList li");
  //console.log(liList)

  for (let i = 0; i < liList.length; i++) {
    setTimeout(function () {
      $(liList[i]).fadeOut(300, "linear", function () {});
    }, 300);

    setTimeout(function () {
      liList[i].remove();
    }, 601);
  }
}

function lightMod() {
  if (lightState == true) {
    document.getElementById("circle1").style.backgroundColor =
      "rgb(47, 44, 50)";
    document.getElementById("circle1").style.filter =
      "drop-shadow(0px 0px 10px rgb(47, 44, 50))";

    //body 색상
    document.body.style.backgroundColor = "#121212";
    //container 색상
    document.getElementById("container").style.backgroundColor = "#121212";
    //리셋버튼
    document.getElementById("resetBtn").style.backgroundColor = "#121212";
    //입력창
    document.getElementById("memoInput").style.backgroundColor = "#1E1E1E";
    document.getElementById("memoInput").style.filter =
      "drop-shadow(0px 0px 10px #252525)";
    document.getElementById("memoInput").style.border = "1px solid #252525";
    document.getElementById("memoInput").style.color = "white";
    //입력버튼
    document.getElementById("addBtn").style.color = "#ffcaca";
    document.getElementById("addBtn").style.backgroundColor = "#252525";
    document.getElementById("addBtn").style.filter =
      "drop-shadow(0px 0px 2px #252525)";
    document.getElementById("memoList").style.filter =
      "drop-shadow(0px 0px 2px #252525)";
    document.getElementById("memoList").style.color = "white";
    //메모들
    memoListModDark();
    //네비게이션
    document.getElementById("navBar").style.backgroundColor = "#1E1E1E";
    //푸터
    $("footer").css("background-color", "#1E1E1E");
    lightState = false;
  } else {
    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle1").style.filter =
      "drop-shadow(0px 0px 10px white)";

    //body 색상
    document.body.style.backgroundColor = "#f6f6f6";
    //container 색상
    document.getElementById("container").style.backgroundColor = "#f6f6f6";
    //리셋버튼
    document.getElementById("resetBtn").style.backgroundColor = "#f6f6f6";
    //입력창
    document.getElementById("memoInput").style.backgroundColor = "white";
    document.getElementById("memoInput").style.filter =
      "drop-shadow(0px 0px 10px #e1dede)";
    document.getElementById("memoInput").style.border = "1px solid #e7e7e7";
    document.getElementById("memoInput").style.color = "black";
    //입력버튼
    document.getElementById("addBtn").style.color = "white";
    document.getElementById("addBtn").style.backgroundColor = "#ffcaca";
    document.getElementById("addBtn").style.filter =
      "drop-shadow(0px 0px 10px #ffcaca)";

    document.getElementById("memoList").style.filter =
      "drop-shadow(0px 0px 10px #e1dede)";
    document.getElementById("memoList").style.color = "black";
    //메모들
    memoListModLight();
    //네비게이션
    document.getElementById("navBar").style.backgroundColor = "white";
    //푸터
    $("footer").css("background-color", "white");
    lightState = true;
  }
}
