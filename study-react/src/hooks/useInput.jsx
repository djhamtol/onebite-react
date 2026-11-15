// 커스텀 훅은 보통 hooks 폴더를 따로 만들어서 관리
import { useState } from "react";

// 커스텀 훅 선언
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
