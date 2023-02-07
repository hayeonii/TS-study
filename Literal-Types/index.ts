// Literal Types로 만드는 const 변수 유사품
// 더 엄격한 타입 지정이 가능하다 (이런 문자만 들어올 수 있어용 하고 알려 줄 수 있음)

// Literal types
let 이름: "kim"; // 이 변수에는 무조건 'kim'이라는 문자만 들어올 수 있음
let 접니다: "단발머리" | "여자";

// Literal types의 장점
// 1. 변수에 뭐가 들어올지 더 엄격하게 관리 가능 - 버그 방지
// 2. 자동완성
// 3. const 변수와 유사하게 사용 가능하지만 여러개를 쓸 수 있음

function 함수(a: "hello"): 1 | 0 {
  return 1;
}

함수("hello");

// Q1. 가위/바위/보 중 1개 입력 가능, 가위/바위/보만 들어올 수 있는 배열 return 함수
function 가위바위보(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return [x];
}

// Literal type의 문제점
var 자료 = {
  name: "kim",
};

function 내함수(a: "kim") {}
// 내함수(자료.name) -> `a: 'kim'`은 kim이라는 자료만 들어올 수 있다는 뜻이 아닌 kim으로 "타입 지정"을 한 것임 -> 에러

// 문제 해결 방법
// 1. object 만들 때 타입 지정 확실하게 하기
// 2. as 문법 쓰기
// 3. object 만들 때 as const

var 문제해결자료 = {
  name: "kim",
} as const;
// as const: 이 object는 literal type 지정 알아서 해 주삼
// 효과 1. object value 값을 그대로 타입으로 지정해 줌
// 효과 2. object 속성들에 모드 readonly 붙여 줌

// object 자료를 완전히 잠가놓고 싶다면 as const 써 보기!
