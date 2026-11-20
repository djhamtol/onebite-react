import "./App.css";
import { useState, useEffect } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  // Viewer와 Controller는 형제 관계라서 데이터를 주고 받을 수 없다.
  // 부모인 App에서 State를 선언하여 자식들에게 props로 데이터를 전달한다.
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 배열에 들어간 값(두 번째 인자)이 바뀌게 되면 콜백 함수(첫 번째 인자) 실행
  // 여기서 배열을 의존성 배열, dependency array, deps 라고 부름.
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value); // 비동기 함수라서 state 업데이트 예약만 하고 실제 업데이트는 이벤트 핸들러 처리 직후에 됨.

    // console.log(count); // 업데이트가 되기 전의 state 값이 출력된다. 변경된 state값을 사용하고 싶다면 useEffect 사용.
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </section>
      <section>
        <Viewer count={count} /> {/* props로 State 전달 */}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />{" "}
        {/* props로 이벤트 핸들러 전달 */}
      </section>
    </div>
  );
}

export default App;
