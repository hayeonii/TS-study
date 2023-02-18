// 함수의 타입 지정
// 변수만 만들면 any type 자동 할당
// 함수는 parameter, return값 타입 지정이 가능함
function 함수(x) {
    return x * 2;
}
// 함수에서 void 타입 활용 가능함 - 어떤 값을 return 하고 싶지 않을 때
// 실수로 return 하는 것을 사전에 막을 수 있음
function 함수2(x) {
    x + 1;
}
// JS와 다른 점: 타입 지정 된 파라미터는 필수 요소
함수2(2); // 파라미터가 없다면 에러 발생
// 파라미터가 옵션일 경우
// 파라미터변수? :타입
// 변수? :number = 변수 :number | undefined
function 함수3(x) {
    x + 1;
}
function 함수4(x) {
    x + 1;
}
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수
function myName(이름) {
    if (이름) {
        console.log("안녕하세요" + 이름);
    }
    else {
        console.log("이름이 없습니다");
    }
}
// Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
function count(x) {
    return x.toString().length;
}
// Q3. 결혼 확률 알려주는 함수
function isMarried(money, haveHome, charm) {
    var score = 0;
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
function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
내함수(123);
function 내함수2(x) {
    var array = [];
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
function 내함수3(x) {
    var array = [];
    array[0] = x;
}
내함수3(123);
function 변환기(data) {
    return JSON.parse(data);
}
var jake = 변환기('{"name":"kim"}');
// Q1. 클리닝 함수 만들기
function cleaning(a) {
    var array = [];
    a.forEach(function (v) {
        if (typeof v === "string") {
            array.push(parseInt(v));
        }
        else {
            array.push(v);
        }
    });
    return array;
}
// Q2. 같은 함수 만들어 보기
function subject(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (typeof Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "타입에러";
    }
}
var 동물;
var 동물객체 = { name: "kim", age: 20 };
// const 변수는 등호로 재할당만 막을 수 있음
// const로 담은 object 수정은 자유롭게 가능하다 but ts 쓰면 수정 막을 수 있음
var 출생지역 = { region: "seoul" };
출생지역.region = "busan";
var 여친 = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
var 함수a = function (a) {
    return 10;
}; // 함수 type alias 부착하려면 함수표현식을 써야됨
var ABC = function (x, y) {
    return x + y;
};
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log();
    },
};
회원정보.plusOne(10); // 이렇게 호출해서 사용할 수 있음
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (y) {
    var result = y.replace(/-/g, "");
    return parseInt(result);
};
// Q3. 함수에 함수 집어넣기
function 퀴즈함수(number, 함수1, 함수2) {
    var resultOne = 함수1(number);
    return console.log(함수2(resultOne));
}
