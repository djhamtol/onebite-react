import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter(
      (todo) => todo.content.toLowerCase().includes(search.toLowerCase()), // toLowerCase는 대소문자 구별없이 검색되도록 하기위해
    );
  };

  // useMemo 사용전(최적화 전) 코드
  // 검색을 할 때도 리렌더링 때문에 getAnalyedData가 호출되어 totalCount,doneCount,notDoneCount이 집계되기 때문에 최적화 필요.
  // const getAnalyedData = () => {
  // console.log("getAnalyedData 호출!");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount, //totalCount: totalCount
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  // const { totalCount, doneCount, notDoneCount } = getAnalyedData();


  // const 결과값저장할변수명 = useMemo(()=>{}, [변화할 변수명]);
  // 두번째 인자의 []는 의존성 배열, deps
  // deps가 변경되면 콜백 함수 실행.
  // deps를 기준으로 콜백 함수 내 코드를 메모이제이션
  // 직전 결과값을 기억해서 의존성이 그대로일 때 재사용
  // 콜백 함수가 반환하는 결과값을 그대로 반환해줌.
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount, //totalCount: totalCount
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todos_wrapper">
        {/* 방법1. JSX 요소(컴포넌트)들 직접 작성하여 렌더링
        <TodoItem/>
        <TodoItem/>
        <TodoItem/> */}

        {/* 방법2. 배열 안에 JSX 요소(컴포넌트)들 직접 작성하여 렌더링 
        React가 배열을 순회하며 렌더링하므로 각 요소에 key가 필요함.
        {[
            <TodoItem key={todos[0].id}/>,
            <TodoItem key={todos[1].id}/>,
            <TodoItem key={todos[2].id}/>
        ]} */}

        {/* 방법3. map()으로 JSX 요소(컴포넌트)들 생성하고 배열 반환
        React가 배열을 순회하며 렌더링하므로 각 요소에 key가 필요함.*/}
        {/* {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id}/>;
        })} */}
        {/* 리액트는 배열의 각 요소를 순회하면서 렌더링 함.{[요소1, 요소2, ...]} -> 요소1, 요소2, ...가 화면에 렌더링됨*/}
        {/* 단, 리액트가 요소를 식별할 수 있도록 key도 지정해주어야 리액트가 추가, 삭제, 변경을 인식할 수 잇다. */}
        {/* key는 리액트가 사용하는 특별한 prop이기 때문에 prop.key로 key를 꺼내쓸 수는 없다. */}
        {filteredTodos.map((todo) => {
          /* 배열.map(): 리턴값들로 새로운 배열로 만들어 반환 */
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
