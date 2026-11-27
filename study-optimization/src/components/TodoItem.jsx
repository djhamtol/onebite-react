import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox} // input의 체크박스는 onClick이 아닌 onChange로
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// React.memo
// 넘겨받은 props 중 onUpdate, onDelete는 함수다.
// 함수는 객체 타입이므로 주소값이 저장되는데, 객체 비교시(얕은 비교) 주소값을 비교하기 때문에 F가 출력됨.
// const a = {a: 1};
// const b = {a: 1};
// console.log(a===b); --> F
// 리액트의 리렌더링시에도 함수는 새롭게 생성되어 새로운 주소값을 갖는다.
// 부모 컴포넌트가 리렌더링되고 이전 함수와 현재 함수를 비교하면 주소값이 달라 props가 바꼈다고 판단하여 자식도 리렌더링하게 된다.
// export default memo(TodoItem);

// 객체 타입 props의 비교시 주소값이 달라도 리렌더링되는 것을 막기위해
// 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
// T -> Props 바뀌지 않음 -> 리렌더링x
// F -> Props 바뀜 -> 리렌더링o
// export default memo(TodoItem, (prevProps, nextProps) => {

//   // id, isDone, content, date의 이전과 현재가 같지 않다면 리렌더링
//   if (prevProps.id !== nextProps.id) return false; 
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   // id, isDone, content, date가 모두 같다면 리렌더링x
//   // onUpdate, onDelete는 검사x
//   return true;
// });


// props가 변경되었는지 직접 작성하고 반환값에 따라 판단하게 하는 코드 대신
// 간단하게 useCallback 사용.
// 최적화된 함수. (함수를 메모이제이션해서 재생성 방지)
// 부모에 있는 최적화할 함수들에 useCallback 적용.
export default memo(TodoItem);