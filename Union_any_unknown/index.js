// 타입을 미리 정하기 애매할 때
// union type: 타입 2개 이상 합친 새로운 타입 만들기
var 회원 = 123; // number 또는 string이 들어올 수 있음
// 여러 타입이 혼용된 array 타입 지정
var 회원들 = [1, "2", 3];
var 오브젝트 = { a: "123" };
// any 타입: 모든 자료형 허용해 줌
// TS 쓰는 의미가 없어짐(타입실드 해제 문법) -> 일반 JS 변수로 만들고 싶을 때 사용
var 이름;
이름 = 123;
이름 = [];
// unknown 타입: 모든 자료형 허용해 줌
// any와 유사
// any보다 안전 - TS의 엄격함 적용
var 이름2;
이름 = 123;
이름 = {};
// let 변수: string = 이름2; - error
// 자료 집어넣어도 타입은 그대로 unknown
// unknown 타입을 다른 곳에 집어넣으려고 한다면 실드 발생해 에러 발생
// but 코드 작성 중 any/unknown 부여할 경우는 드물다
// TS는 엄격하기 때문에 Union 타입일 경우 연산 에러가 날 수 있음
// Q1. 변수 타입 지정해 보기
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// Q2. 학교 변수 타입 지정해 보기
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
