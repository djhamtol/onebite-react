import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  // Viewer와 Controller는 형제 관계라서 데이터를 주고 받을 수 없다. 
  // 부모인 App에서 State를 선언하여 자식들에게 props로 데이터를 전달한다.
  const [count, setCount] = useState(0); 

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} /> {/* props로 State 전달 */}
      </section>
      <section>
        <Controller onClickButton={onClickButton} /> {/* props로 이벤트 핸들러 전달 */}
      </section>
    </div>
  );
}

export default App;
