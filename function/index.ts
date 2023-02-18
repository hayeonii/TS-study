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

// -------------------------------------------------- //

// 타입 확정하기: Narrowing & Assertion
// union 타입의 경우 미리 타입 검사가 필요

// Type Narrowing
// Type이 하나로 확정되지 않았을 경우
// 대표적인 Narrowing 방법: typeof 연산자
// 타입이 불확실할 경우 if문 등으로 narrowing을 해 주어야 함
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

내함수(123);

function 내함수2(x: number | string) {
  let array: number[] = [];
  // array[0] = x; 타입이 number | string이라 에러

  if (typeof x === "number") {
    array[0] = x;
  }
}

내함수2(123);

// Narrowing으로 판정해 주는 문법들
// 현재 변수의 타입이 무엇인지 특정지을 수 있다면 인정해 줌
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모

// Type Assertion(타입 덮어쓰기)
function 내함수3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

내함수3(123);

// assertion 문법의 용도
// 1. narrowing - 타입을 a에서 b로 변경하는 용도는 아님
// 2. 무슨 타입이 들어올 지 100% 확실할 때 쓴다 - 그래서 굳이 쓸 필요 없음
// 3. 실제로 타입을 바꿔주는 것은 아니다

// as를 유용하게 쓸 수 있는 경우
// 타입을 강제로 부여하는 변환기 함수를 만들 때
type Person = {
  name: string;
};
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');

// Q1. 클리닝 함수 만들기

function cleaning(a: (string | number)[]) {
  let array: number[] = [];

  a.forEach((v) => {
    if (typeof v === "string") {
      array.push(parseInt(v));
    } else {
      array.push(v);
    }
  });

  return array;
}

// Q2. 같은 함수 만들어 보기
function subject(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (typeof Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "타입에러";
  }
}

// -------------------------------------------------- //

// 타입 변수에 담아서 쓰기
// type alias (타입 변수 만드는 법)
// type alias 만들 때 영어 대문자로 시작하는 것이 좋음(일반 변수와 구분)
// 같은 이름의 type 변수 재정의 불가
type AnimalType = string | number | undefined;
let 동물: AnimalType;

type AnimalObjType = { name: string; age: number };
let 동물객체: AnimalObjType = { name: "kim", age: 20 };

// const 변수는 등호로 재할당만 막을 수 있음
// const로 담은 object 수정은 자유롭게 가능하다 but ts 쓰면 수정 막을 수 있음
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

// readonly 키워드는 object의 자료 수정을 막아 줌
// ts 에러는 에디터와 터미널에서만 존재하기 때문에 실제로 변환된 js 파일에서의 작동은 막아주지 못함
type Girlfriend = {
  // object 안에서도 ? 키워드 사용 가능
  readonly name?: string;
};

const 여친: Girlfriend = {
  name: "엠버",
};

// type 변수 union type으로 합치기 가능
type Name = string;
type Age = number;
type PersonInfo = Name | Age;

// & 연산자로 object 타입 합치기(extend)
type PositionX = { x: number };
type PositionY = { y: number };
type Positon = PositionX & PositionY; // {x:number, y:number}
let position: Positon = { x: 10, y: 20 };

// Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면?
// 하나만 사용이 가능

/*
  Q2. 다음 조건 만족하는 타입 만들기
  1. 이 타입은 object 자료형이어야합니다.
  2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
  3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
  4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
*/

type MyType = {
  color?: string;
  size: number;
  readonly position: number[];
};

/*
  Q3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
  1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
  2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
  3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/
type Info = {
  name: string;
  phone: number;
  email: string;
};

/*
  Q4. 다음을 만족하는 type alias를 만들어보십시오.
  1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
  2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
  3. Q3 재활용
*/

type IsAdult = { isAdult: boolean };
type User = Info & IsAdult;

// -------------------------------------------------- //
// 함수와 methods에 type alias 지정하는 법

// type alias에 함수 type 저장해서 쓰는 법
type 함수타입 = (a: string) => number; // 함수 타입 함수를 만들 때에는 무조건 화살표 함수 사용
type NumOut = (x: number, y: number) => number; // 숫자 두 개를 파라미터로 입력, 숫자를 return

let 함수a: 함수타입 = function (a) {
  return 10;
}; // 함수 type alias 부착하려면 함수표현식을 써야됨

let ABC: NumOut = function (x, y) {
  return x + y;
};
// 정리
// 1. 함수타입은 () => {} 모양으로
// 2. 함수표현식에만 type alias 사용 가능

// object 자료 안의 함수 타입 지정 (methods)
// object 안의 함수 타입 지정은 어떻게 할 수 있을까?

type Member = {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let 회원정보 = {
  name: "kim",
  plusOne(a: number): number {
    return a + 1;
  },
  changeName: () => {
    console.log();
  },
};

회원정보.plusOne(10); // 이렇게 호출해서 사용할 수 있음
회원정보.changeName();

// Q2. 함수2개를 만들어보고 타입까지 정의해 보기
type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

type RemoveType = (y: string) => number;

let removeDash: RemoveType = function (y) {
  let result = y.replace(/-/g, "");
  return parseInt(result);
};

// Q3. 함수에 함수 집어넣기
function 퀴즈함수(number: string, 함수1: CutType, 함수2: RemoveType) {
  let resultOne = 함수1(number);
  return console.log(함수2(resultOne));
}
