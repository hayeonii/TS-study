// 변수 타입 지정 - 변수명: 타입명
var 이름 = "kim";
var 나이 = 50;
var 결혼했니 = true; // undefined, null 타입도 있음
var 회원들 = ["kim", "park"];
var 회원들2 = {
    member1: "kim",
    member2: "park",
};
// TS는 대부분 자동으로 타입 지정을 해 줌
var 회원 = "park"; // 이러한 형식으로 작성해도 됨
// Q1. 이름, 나이, 출생지역 변수로 각각 저장해 보기
var MyName = "임하연";
var age = 26;
var 출생지역 = "광주";
// Q2. 좋아하는 노래, 가수 object 자료형으로 담기
var favorite = {
    song: "UR",
    singer: "태연",
};
// Q3. 자료의 타입 지정
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
