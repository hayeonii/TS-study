// selector로 찾은 요소는 null이 들어올 수 있기 때문에 type을 확정시켜 주어야 함

// HTML 조작 시 narrowing 방법
// 1. if~
let title = document.querySelector("#title");
if (title != null) {
  title.innerHTML = "반가워요";
}

// 2. instanceof 연산자 (가장 많이 쓰임)
let 제목 = document.querySelector("#title");
if (제목 instanceof Element) {
  제목.innerHTML = "안녕";
}

// 3. as 키워드
// null이 들어와도 Element type으로 착각하게 만들어 주기 때문에 주의
let title2 = document.querySelector("#title") as Element;
title2.innerHTML = "헬로우";

// 4. object에 붙이는 ?. (옵셔널 체이닝)
// 제목에 innerHTML이 있으면 출력 없으면 undefined
let title3 = document.querySelector("#title");
if (title3?.innerHTML != undefined) {
  title3.innerHTML = "반갑구만 반가워요";
}

// 5. tsconfig.json 파일에서 NullCheck 모드 끄기

// -------------------------------------------
// <a> 태그 href 속성 바꾸기

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

// -------------------------------------------
// 타입스크립트에서 이벤트리스너 부착하는 법
// Q1. 버튼 누르면 이미지 바꿔보기
let button = document.querySelector("#button");
let img = document.querySelector("#image");
button?.addEventListener("click", function () {
  // button에 addEventListener 가능하면 해주고 아니면 undefined
  if (img instanceof HTMLImageElement) {
    img.src = "new.jpg";
  }
});

// -------------------------------------------
// Q2. a 링크 3개 전부 href 속성 바꾸기
let link = document.querySelectorAll(".naver");
link.forEach((i) => {
  if (i instanceof HTMLAnchorElement) {
    i.href = "https://kakao.com";
  }
});
