import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    console.log("evenmount"); // 빈 배열이므로 mount될 때 한 번 수행.
    // 클린업, 정리함수 : useEffect의 콜백 함수가 반환하는 함수, React가 정리 함수를 보관하고 언마운트될 때 실행 시킴.
    // 정리 함수는 다음 Effect 실행을 위한 정리 작업이나 컴포넌트 언마운트 시 리소스 정리를 담당.
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
