import './App.css';
import Header from './components/Header.jsx'; // ESM 방식으로 불러오기
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';

// Header 컴포넌트의 부모 컴포넌트 , Root 컴포넌트 (모든 컴포넌트들의 뿌리)
// 컴포넌트명은 대문자로 시작
function App() { 

  const buttonProps = { // js 값을 객체로 만들어서 전달하기
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3
  };

  return ( // return문 안에서 컴포넌트들 명시(html 반환)
    <>
      <Header />
      <Main />
      <Footer />
      <h1>안녕 리액트</h1>

      {/* 방법1. prop 이름 지정해서 전달하기 */}
      {/* <Button text={"메일"} color={"red"} a={1}/> 방법1-1. js값을 props로 전달 */}
      <Button {...buttonProps} /> {/* 방법2-1. 스프레드 연산자를 통해 buttonProps 객체 전개 후 전달 */}

      <Button text={"카페"}/>
      <Button text={"블로그"}> {/* prop을 text라는 이름으로 전달 */}
        {/* 방법2. 태그 사이에 넣어서 전달하기 - 받는 컴포넌트에서는 children이라는 이름으로 받는다. */}
        <div>자식 요소</div> {/* html 요소 전달 */}
        {/* <Header/> */} {/* 컴포넌트 전달 */}
      </Button>
    </>
  );
}

export default App; // ESM 방식으로 내보내기