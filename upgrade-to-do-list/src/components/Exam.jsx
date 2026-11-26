import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할, 상태 변경 로직을 담당하는 함수
function reducer(state, action) {
  console.log(state, action);

  //   if (action.type === "INCREASE") {
  //     return state + action.data; 
  //   } else if (action.type === "DECREASE") {
  //     return state - action.data;
  //   }

  // 위 코드를 switch문으로
  switch (action.type) {
    case "INCREASE":
      return state + action.data; // reducer의 리턴문은 state의 set함수 역할을 한다.(state 업데이트)
    case "DECREASE":
      return state - action.data;
    default: // INCREASE도 DECREASE도 아니면 변화x
      return state;
  }
}

const Exam = () => {
  // dispatch: 발송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수: 상태 변경에 필요한 데이터
    // -> 액션 객체
    dispatch({
      type: "INCREASE", // 증가시켜줘
      data: 1, // 1만큼
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
