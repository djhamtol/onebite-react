import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 😎</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// React.memo
// 최적화된 컴포넌트
// 고차 컴포넌트, HOC
// 방법1
// const memoizedHeader = memo(Header);
// export default memoizedHeader;
// 방법2
export default memo(Header); 
