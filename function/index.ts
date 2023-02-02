// 함수의 타입 지정
// 변수만 만들면 any type 자동 할당
// 함수는 parameter, return값 타입 지정이 가능함

function 함수(x: number): number {
  return x * 2;
}

// 함수에서 void 타입 활용 가능함 - 어떤 값을 return 하고 싶지 않을 때
// 실수로 return 하는 것을 사전에 막을 수 있음
function 함수2(x: number): void {
  x + 1;
}

// JS와 다른 점: 타입 지정 된 파라미터는 필수 요소
함수2(2); // 파라미터가 없다면 에러 발생

// 파라미터가 옵션일 경우
// 파라미터변수? :타입
// 변수? :number = 변수 :number | undefined
function 함수3(x?: number): void {
  x + 1;
}

function 함수4(x: number | undefined): void {
  x + 1;
}

// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수
function myName(이름?: string) {
  if (이름) {
    console.log("안녕하세요" + 이름);
  } else {
    console.log("이름이 없습니다");
  }
}

// Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
function count(x: number | string): number {
  return x.toString().length;
}

// Q3. 결혼 확률 알려주는 함수
function isMarried(
  money: number,
  haveHome: boolean,
  charm: string
): string | void {
  let score: number = 0;

  score += money;

  if (haveHome) {
    score += 500;
  }

  if (charm === "상") {
    score += 100;
  }

  if (score >= 600) {
    return "결혼가능";
  }
}
// union 타입의 경우 미리 타입 검사가 필요
