import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // 방법1. state를 따로따로 만들기
  //   const [name, setName] = useState("이름");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeBirth = (e) => {
  //     setBirth(e.target.value);
  //   };

  //   const onChangeCountry = (e) => {
  //     setCountry(e.target.value);
  //   };

  //   const onChangeBio = (e) => {
  //     setBio(e.target.value);
  //   };

  //   return (
  //     <div>
  //       <div>
  //         <input value={name} onChange={onChangeName} placeholder="이름" />
  //         {name}
  //       </div>

  //       <div>
  //         <input value={birth} onChange={onChangeBirth} type="date" />
  //         {birth}
  //       </div>

  //       <div>
  //         <select value={country} onChange={onChangeCountry}>
  //           <option value={""}></option>
  //           <option value={"kr"}>한국</option>
  //           <option value={"us"}>미국</option>
  //           <option value={"uk"}>영국</option>
  //         </select>
  //         {country}
  //       </div>

  //       <div>
  //         <textarea value={bio} onChange={onChangeBio}></textarea>
  //         {bio}
  //       </div>
  //     </div>
  //   );

  // 방법2. 객체로 만들어 하나의 state만 생성하기
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 방법2-1. 이벤트 핸들러 따로따로
  //   const onChangeName = (e) => {
  //     setInput({
  //       ...input, // 관련 없는 프로퍼티들은 유지되도록 스프레드 연산자 사용
  //       name: e.target.value,
  //     });
  //   };

  //   const onChangeBirth = (e) => {
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     });
  //   };

  //   const onChangeCountry = (e) => {
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     });
  //   };

  //   const onChangeBio = (e) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };

  //   return (
  //     <div>
  //       <div>
  //         <input value={input.name} onChange={onChangeName} placeholder="이름" />
  //         {input.name}
  //       </div>

  //       <div>
  //         <input value={input.birth} onChange={onChangeBirth} type="date" />
  //         {input.birth}
  //       </div>

  //       <div>
  //         <select value={input.country} onChange={onChangeCountry}>
  //           <option value={""}></option>
  //           <option value={"kr"}>한국</option>
  //           <option value={"us"}>미국</option>
  //           <option value={"uk"}>영국</option>
  //         </select>
  //         {input.country}
  //       </div>

  //       <div>
  //         <textarea value={input.bio} onChange={onChangeBio}></textarea>
  //         {input.bio}
  //       </div>
  //     </div>
  //   );

  // 방법 2-2. 이벤트 핸들러도 통합
  const onChange = (e) => {
    console.log(e)
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  };

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder="이름" />
        {input.name}
      </div>

      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
        {input.birth}
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}> {/* 선택 안 하면 select의 value에 설정한 값과 같은 value값을 가진 옵션이 기본적으로 선택됨.*/}
          <option value={""}></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
        {input.bio}
      </div>
    </div>
  );
};

export default Register;
