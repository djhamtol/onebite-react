// ============ CJS =============
// 객체 자체를 가져오기
// const moduleData = require('./math');

// console.log(moduleData.add(1, 2)); // 3
// console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }

// // 객체 안 함수를 구조 분해로 가져오기
// const { add, sub } = require('./math');

// console.log(add(1, 2));


// ============ ESM =============
// 기본 함수랑 일반 함수 따로 불러오는 방법
// import mul from "./math.js"; // 기본 함수 불러오기 (중괄호 사용x, 함수를 내가 만든 별칭(mul)으로 바꿔도 됨)
// import { add, sub } from "./math.js";

// 한 번에 불러오는 방법
// import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(mul(2, 3));


// ============ 라이브러리 =============
// 가져오기
// 라이브러리의 기본 함수 가져오기. 라이브러리는 경로가 아닌 이름 적으면 됨.
import randomColor from "randomcolor"; 

const color = randomColor();
console.log(color);