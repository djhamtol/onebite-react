import "./Main.css"; // css파일에서 export는 안 해도 됨

const Main = () => {
    const user = {
        name: '햄',
        isLogin: true
    };

    //방법1
    if (user.isLogin) {
        return (
            <div 
                //방법1 - 외장 스타일
                className="logout"

                //방법2 - 인라인 스타일
                // style={{
                //     backgroundColor: 'red',
                //     borderBottom: '5px solid blue'
                // }}
            >
                로그아웃
            </div>
        );
    } else {
        return <div>로그인</div>;
    }

    //방법2
    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : (
    //             <div>로그인</div>
    //         )}
    //     </>
    // );
};

export default Main;