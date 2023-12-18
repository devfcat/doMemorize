var lightState = true;

//로컬 스토리지에 저장하는 함수, 코드

// 로컬스토리지에 memos라는 키가 없으면 키를 생성해줌
let memos = JSON.parse(localStorage.getItem('memos'));
memos = memos ?? [];


function addMemo() {
    let newMemo = {};
    let memoContent = document.querySelector('#memoInput').value;

    if (memoContent != "") {

        // id 값이 로컬스토리지에 없다면 키를 생성하고 0부터 id 설정
        let id = JSON.parse(localStorage.getItem('id'));
        id = id ?? 0;

        // newMemo 객체에 id, 제목, 내용, 날짜 저장
        newMemo.id = id;
        newMemo.content = memoContent;
        memos.push(newMemo);

        // setMemo() : 2번에서 만들 메모들 화면에 보여주는 함수
        setMemo();

        // 로컬스토리지에 memos 키값으로 저장하기
        // 로컬스토리지에 id 저장하기
        localStorage.setItem('memos', JSON.stringify(memos));
        localStorage.setItem('id', JSON.stringify(++id));


        document.querySelector('#memoInput').value = null;

    }
    else{
        document.querySelector('#memoInput').value = "내용을 입력해주세요.";
    }
}

function resize(obj) {
    obj.style.height = "1px";
    obj.style.height = 12 + obj.scrollHeight + "px";
}

//const newBtn = document.createElement("button");

/*
newBtn.addEventListener("click", () => {
	newLi.classList.toggle("complete");
});
*/

function setMemo() {

    const memo_list = document.querySelector('#memoList');

    // 기존의 메모 제거
    while (memo_list.firstChild) {
        memo_list.firstChild.remove();
    }

    // 로컬스토리지에서 메모 가져와서 최신순으로 정렬
    for (let i = memos.length - 1; i >= 0; i--) {

        const newLi = document.createElement("li"); // li 생성
        const newBtn = document.createElement("button"); // button 생성
        const newSpan = document.createElement("span"); // span 생성

        newBtn.classList.add('newBTN');

        newSpan.textContent = memos[i].content;
        newLi.append(newBtn, newSpan);
        memo_list.append(newLi);

        newBtn.addEventListener("click", () => {
            // 체크박스 클릭시 완료 표시
            newLi.classList.toggle("complete");
            //setDeleteBtn(Event);
        });



        if (lightState == false) {
            //다크모드일때 검정색 메모박스 생성.
            memoListModDark();
        } else {}

    }
}

function setDeleteBtn(e) {
    const memo_list = document.querySelector('#memoList');

    const btn = event.target
    const li = btn.parentNode
    // 클릭된 메모 배열에서 자르기
    memo_list.removeChild(li)
    // 자른 메모 배열 로컬스토리지에 저장
    const cleanmemo = memos.filter(function (memo) {
        return memo.id !== parseInt(li.id)
    })
    memos = cleanmemo
    // 새로 저장된 메모 화면에 보여주기
    setMemo();
    return;
}

function deleteAll() {
    // 전체 삭제 버튼
    localStorage.clear();
    location.reload()
}


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



function lightMod() {
    if (lightState == true) {
        document.getElementById("lightBTN").style.backgroundColor =
            "rgb(47, 44, 50)";
        document.getElementById("lightBTN").style.filter =
            "drop-shadow(0px 0px 10px rgb(47, 44, 50))";
        document.getElementById("lightBTN").style.color =
            "white";

        //body 색상
        document.body.style.backgroundColor = "#121212";
        //container 색상
        document.getElementById("container").style.backgroundColor = "#121212";
        //리셋버튼
        //document.getElementById("resetBtn").style.backgroundColor = "#121212";
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
        $("footer").css("color", "#1E1E1E");
        lightState = false;
    } else {
        document.getElementById("lightBTN").style.backgroundColor = "white";
        document.getElementById("lightBTN").style.filter =
            "drop-shadow(0px 0px 10px white)";
        document.getElementById("lightBTN").style.color =
            "black";

        //body 색상
        document.body.style.backgroundColor = "#f6f6f6";
        //container 색상
        document.getElementById("container").style.backgroundColor = "#f6f6f6";
        //리셋버튼
        //document.getElementById("resetBtn").style.backgroundColor = "#f6f6f6";
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
        $("footer").css("color", "white");
        lightState = true;
    }
}

$(document).ready(function () {
    //페이지 로드 시 실행할 코드 구현
    setMemo();
});
