import './App.css';
import Header from './components/Header.jsx'; // ESM 방식으로 불러오기
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

// Header 컴포넌트의 부모 컴포넌트 , Root 컴포넌트 (모든 컴포넌트들의 뿌리)
// 컴포넌트명은 대문자로 시작
function App() { 
  return ( // return문 안에서 컴포넌트들 명시(html 반환)
    <>
      <Header />
      <Main />
      <Footer />
      <h1>안녕 리액트</h1>
    </>
  );
}

export default App; // ESM 방식으로 내보내기