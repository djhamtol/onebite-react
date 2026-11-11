import "./App.css";
import Register from "./components/Register";

// Header 컴포넌트의 부모 컴포넌트 , Root 컴포넌트 (모든 컴포넌트들의 뿌리)
// 컴포넌트명은 대문자로 시작
function App() {
  // useState는 두 개의 요소를 가진 배열을 반환하므로 구조 분해 할당으로 선언하면 편하다.
  // 첫 번째: state초기값, 두 번째: 상태 변화 함수

  return (
    // return문 안에서 컴포넌트들 명시(html 반환)
    <>
      <Register />
    </>
  );
}

export default App; // ESM 방식으로 내보내기
