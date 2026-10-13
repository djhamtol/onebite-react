// math 모듈

// ============ CJS =============
// function add(a, b) {
// 	return a + b;
// }

// function sub(a, b) {
// 	return a - b;
// }

// // 내보내기
// module.exports = {
// 	add, //add: add
// 	sub
// };


// ============ ESM =============
// 내보내기 따로 명시
// function add(a, b) {
// 	return a + b;
// }

// function sub(a, b) {
// 	return a - b;
// }

// // 내보내기
// export { add, sub };


// 함수 선언과 내보내기를 한 번에
export function add(a, b) {
	return a + b;
}

export function sub(a, b) {
	return a - b;
}

// +) 기본 함수 내보내기
export default function multiply(a, b) {
	return a * b;
}