// 이 방식처럼 props.color를 무조건 넘겨 받는 다는 가정하에 코드를 작성하면 치명적일 수 있으므로 기본값을 설정해야됨.
// const Button = (props) => { // 매개변수로 props 넘겨받기. 다른 이름 가능
//     console.log(props);
//     return (
//         <button style={{color: props.color}}>
//             {props.text} - {props.color}
//         </button>
//     );
// };

// 구조 분해 방식으로 props의 기본값 설정하기(19버전 방식).
const Button = ({children, text, color = "black"}) => { // 태그 사이로 전달한 prop은 children이라는 이름으로 넘겨 받는다.
    return (
        <button style={{color: color}}>
            {text} - {color}
            {children}
        </button>
    );
};

export default Button;