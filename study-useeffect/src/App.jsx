import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  // Viewer와 Controller는 형제 관계라서 데이터를 주고 받을 수 없다.
  // 부모인 App에서 State를 선언하여 자식들에게 props로 데이터를 전달한다.
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // useEffect 기본 사용법
  // useEffect(() => {}, [변화할 변수])
  // 콜백 함수 + 의존성 배열
  // 배열에 들어간 값(두 번째 인자)이 바뀌게 되면 콜백 함수(첫 번째 인자) 실행
  // 여기서 배열을 의존성 배열, dependency array, deps 라고 부름.
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  // 1. 마운트: 탄생
  // useEffect(() => {}, [])
  // 콜백 함수 + 빈 의존성 배열
  // 콜백 함수를 최초 한 번만 실행. 변화할 변수가 없으니까(빈 배열).
  useEffect(() => {
    console.log("mount");
  }, [])

  // 2. 업데이트: 변화, 리렌더링
  // useEffect(() => {})
  // 콜백 함수만
  // 콜백 함수를 최조 한 번 실행 + 리렌더링마다 실행
  useEffect(() => {
    if(!isMount.current) { /* 마운트될 때는 제외하고 싶을 때 */
      isMount.current = true;
      return;
    }  

    console.log("update"); // 위 if문이 있으면 리렌더링시에만 실행하게 됨
  })

  // 3. 언마운트: 죽음
  // useEffect(() => { return () => {}}, [])
  // 콜백 함수안에 정리 함수 + 빈 배열
  // 컴포넌트가 화면에서 사라질 때 실행하기 때문에 컴포넌트 렌더링 조건문 만들고 Even.jsx에 useEffect 적용.

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
        {count % 2 === 0 ? <Even/> : null} {/* 짝수가 아니면 Even컴포넌트 렌더링x */}
      </section>
      <section>
        <Controller onClickButton={onClickButton} /> {/* props로 이벤트 핸들러 전달 */}
      </section>
    </div>
  );
}

export default App;
