# TypeScript

- TypeScript = JS + Type 문법

## TS를 쓰는 이유

1. JS는 동적 타입이 가능하기 때문에 프로젝트가 클수록 타입을 관리하기가 어렵다.

- TS는 타입을 엄격히 검사해 주기 때문에 에러를 더 정확히 잡아낼 수 있다.

2. 타입 변경 사항 때문에 생기는 에러를 방지해 줄 수 있다.

- 타입이 실수로 변경될 때 에러를 잡아낸다

## TS 설치

### 1. 바닐라 JS 프로젝트에서 설치할 경우

```
npm install -g typescript
```

### 2. 리액트 프로젝트에서 설치할 경우

1. 이미 있는 React 프로젝트에 설치

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

2. 새로운 React 프로젝트 만들 경우

```
npx create-react-app my-app --template typescript
```

## TS 사용 시 주의사항

- tsconfing.json : ts -> js 컴파일 시 옵션 설정 가능
  ```
  {
      "compilerOptions": {
          "target": "es5",
          "module": "commonjs",
      }
  }
  ```
- ts 파일은 브라우저가 읽지 못하기 때문에 `tsc -w` 명령어를 통해 파일 자동 변환
- ts는 엄격하다
  - union 타입의 경우 연산이 불가하다

## 필수 문법 정리

- 간단한 변수 타입 지정 가능

  - string / number / boolean / null / undefined / bight / [] / {} ...

  ```
  // 타입 지정: 이 변수엔 string type만 들어올 수 있음
  let 이름: string = "kim";

  // array type 지정: 이 변수엔 string 담긴 array만 들어올 수 있음
  let 이름2: string[] = ['kim', 'park']

  // object type 지정
  let 이름3: {name: string} = {name: 'kim'}
  let 이름4: {name?: string} = {name: 'kim'} // ?: name 속성은 옵션!

  // union type: 다양한 type 지정
  let 이름5: string | number = 'kim'
  ```

- type은 변수에 담아서 쓸 수 있음(Type alias)

  - 일반적으로 type 변수 명은 대문자로 많이 작성

  ```
  type MyType = string | number

  let 이름 :MyType = 123;
  ```

- 함수의 type 지정

  ```
  function 함수(x :number) :number{
    return x * 2
  } // 파라미터로 number, return값으로 number
  ```

- array에 쓸 수 있는 tuple 타입

  ```
  type Member = [number, boolean]
  // 무조건 첫 번째는 number, 두 번째는 boolean
  let john:Member = [123, true]
  ```

- obejct의 type 지정

  ```
  type Member = {
    name: string;
  };

  let john: Member = { name: "kim" };
  ```

  - object에 타입 지정해야할 속성이 너무 많다면?

    ```
    type Member = {
    [key: string]: string;
    // 모든 obejct 속성: 글자로 된 모든 object 속성 타입 - string
    };

    let john: Member = { name: "kim" };
    ```

- class type 지정 가능
  ```
  class User {
    name: string
    constructor(name :string){
      this.name = name
    }
  }
  ```
