// 변수 타입 지정 - 변수명: 타입명
let 이름: string = "kim";
let 나이: number = 50;
let 결혼했니: boolean = true; // undefined, null 타입도 있음
let 회원들: string[] = ["kim", "park"];
let 회원들2: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// TS는 대부분 자동으로 타입 지정을 해 줌
let 회원 = "park"; // 이러한 형식으로 작성해도 됨

// Q1. 이름, 나이, 출생지역 변수로 각각 저장해 보기
let MyName = "임하연";
let age = 26;
let 출생지역 = "광주";

// Q2. 좋아하는 노래, 가수 object 자료형으로 담기
let favorite: { song: string; singer: string } = {
  song: "UR",
  singer: "태연",
};

// Q3. 자료의 타입 지정
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
