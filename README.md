# Technical Challenge Project

![TS](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-black?style=flat-square&logoColor=white)
![Emotion](https://img.shields.io/badge/Styled-Emotion-pink?style=flat-square&logoColor=white)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-007ACC.svg)](https://code.visualstudio.com/)

- 상품 목록 페이지에서 상품 리스트를 카테고리별로 보여지고, <br />
- 각 상품 목록 페이지에서는 `상품이름`에 따른 `검색`이 가능하다. <br />
- 상품을 클릭시 `상품 상세보기`로 이동한다. <br />
- 상품 상세보기에 `제품 링크로` 가기 와 `장바구니` 담기를 할 수 있다.<br />
- 장바구니에서 내가 추가한 `상품 목록`을 가지고 있으며, `삭제`도 가능 하다. <br />
- 장바구니에서 내가 추가한 상품 목록 `상세보기`가 가능하다. <br />

## :clock3: Project Period

2021.10.19 ~ 2021.10.21 (총 3일)

## :hammer: Installation

```javascript
yarn i
```

## :bell: Usage

```javascript
yarn dev
```

If you enter `yarn dev`

your browser open `http://localhost:3000/`

## :폴더 구조

```
└── pages
    ├── basket
    ├── detail
           └── [market_id]
    └── list

└── src
    └──  components
         ├── commons
             ├── list
             ├── search
             └── search02
     └──  units
          ├── basket
          ├── detail
          └── marketlist
```

- `pages`는 디렉토리의 파일로부터 export 된 React 컴포넌트입니다.
- `detail`은 `Dynamic Routing`으로 각 상품의 상세페이지가 그려진다.
- `src`의 경우 `components`와 `units`으로 나뉜다.
- `components`에는 재사용 가능한 컴포넌트들로 구성 돼있다.
- `list`에는 상품 목록 컴포넌트
- `search`에는 검색 컴포넌트
- `units`에는 `container`/`presenter` 패턴 사용한 소스코드
- `basket`에는 장바구니 컴포넌트
- `detail`에는 상품 상세보기 컴포넌트
- `marketlist`에는 카테고리 컴포넌트

## Preview

#### 1-1. 상품 목록 페이지/상품이 없을 경우

![main](https://user-images.githubusercontent.com/86825253/138339468-9fcce870-af07-4d5d-ac7d-7cf38a50efb5.gif)

#### 1-2. 상품 목록 페이지 - 상품 검색

![search](https://user-images.githubusercontent.com/86825253/138339628-9852cbd4-3cfb-4094-ba83-104f00fa561b.gif)

#### 2-1. 상세 페이지

![detail](https://user-images.githubusercontent.com/86825253/138339558-02c6f727-8b0f-43a9-8e81-d9ad806eb966.gif)

#### 2-2. 상세 페이지 - 장바구니 추가

![baksketadd](https://user-images.githubusercontent.com/86825253/138340712-89fc9a06-0466-464a-864b-b9e0a382bc62.gif)

#### 3-1. 장바구니 페이지 - 상세보기/장바구니 목록 삭제

![basket](https://user-images.githubusercontent.com/86825253/138340212-a163e2ea-9140-446e-8678-3e15df52703a.gif)

## Thchnical Skills

- 메인 라이브러리: React
- 메인 언어 및 문법: Typescript, RxJS, Javascript ES6+, JSX
- 사용한 패키지: <br/>
  `axios`(API를 연동하기 위해서 사용 했고, <br/>Promise 기반으로 async/await 코드를 매우 쉽게 구현할 수 있게 해주기 때문에)<br/>
  `emotion/styled`(CSS in js 라이브러리로 사용 <br/>
  스타일을 입힌 것을 component로 만들어서 어느 곳에서든 재사용이 가능, <br/>
  자바스크립트에서 쓰이는 상수, props, 함수 공유가능 하기 때문에)

- 기타: local storage(상품 장바구니 api대신에 사용)

## 후기

- 본인이 수행한 Challenge에 대한 설명<br/>
  - 장바구니에 중복되는 상품 안담기게 하기 <br/>
  - 장바구니에서 상세보기로 이동하기 <br/>
  - 장바구니 삭제 <br/>
- 과제를 진행하면서 가장 자랑스러웠던 부분<br/>
  - `aixos`와 `rest API` 를 이번에 거의 처음으로 사용 해 봐서 고민도 많이 하고<br/> 검색도 많이 해봤지만, 어느새 데이터를 불러오는데 즐기고 있는게 눈에 보였다.
- 과제를 진행하면서 가장 아쉬웠던/어려웠던 부분<br/>
  - 위와 마찬가지로 `aixos`와 `rest API` 처음 사용 해봐서 난감했다.
    = 아직 더 추가 하고싶은 기능 <br/> (오늘 본 상품, history API를 이용한 가짜 주소 만들기, 페이지네이션 등 ) 하고 싶은게 많았다.

## by 이창묵([LeeChangMook](https://github.com/moogieon))
