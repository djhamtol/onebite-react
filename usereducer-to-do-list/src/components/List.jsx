import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()) // toLowerCase는 대소문자 구별없이 검색되도록 하기위해
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
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
        {filteredTodos.map((todo) => { /* 배열.map(): 리턴값들로 새로운 배열로 만들어 반환 */
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default List;
