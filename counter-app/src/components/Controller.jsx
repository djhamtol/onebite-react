const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button
        onClick={() => { // {}안에 화살표 함수가 아닌 onClickButton를 넣으면 인수를 전달할 수 없음. onClickButton(-1)은 오류.
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
