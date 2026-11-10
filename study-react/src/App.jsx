import "./App.css";
import { useState } from "react";

// 자식 컴포넌트들은 자신이 갖는 state의 값이 변경되지 않아도 부모로부터 받은 props가 변경되면 컴포넌트 함수가 재호출되어 리렌더링 된다.
const Bulb = ({ light }) => {
  console.log(light); // count 버튼을 클릭했을 때도 콘솔이 찍힘. 부모가 리렌더링되면 자식도 리렌더링되기 때문. (불필요한 리렌더링. 컴포넌트 분리 필요)
  return (
    <div>
      {light === "on" ? (
        <h1 style={{ backgroundColor: "orange" }}>on</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>off</h1>
      )}
    </div>
  );
};

// Header 컴포넌트의 부모 컴포넌트 , Root 컴포넌트 (모든 컴포넌트들의 뿌리)
// 컴포넌트명은 대문자로 시작
function App() {
  // useState는 두 개의 요소를 가진 배열을 반환하므로 구조 분해 할당으로 선언하면 편하다.
  // 첫 번째: state초기값, 두 번째: 상태 변화 함수
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("off");

  return (
    // return문 안에서 컴포넌트들 명시(html 반환)
    <>
      <div>
        <Bulb light={light} /> {/* 자식 컴포넌트 호출. state값이 변경되어 넘겨주는 props값이 변한다. */}
        <button
          onClick={() => {
            setLight(light === "on" ? "off" : "on"); 
          }}
        >
          {light === "on" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App; // ESM 방식으로 내보내기
