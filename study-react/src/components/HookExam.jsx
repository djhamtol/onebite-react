import useInput from "./../hooks/useInput"; // 커스텀 훅 임포트

// hook 관련된 팁 3가지
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 커스텀 훅을 만들 수 있다.

// 커스텀 훅 사용
const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
