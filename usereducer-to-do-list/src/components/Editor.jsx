import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if(e.keyCode === 13) {
        onSubmit();
    }
  }

  const onSubmit = () => {
    if (content === "") { // 아무것도 입력하지 않았을 때 추가x
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Tode..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
