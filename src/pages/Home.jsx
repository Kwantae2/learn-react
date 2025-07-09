// import React, { useState } from 'react'

import Move from "../components/Move";
import TodoList from "../components/TodoList";

const Home = () => {
  //logic
  // const [step, setStep] = useState(0);
  // const [userName, setUserName] = useState("");

  // const userStep = () => {
  //   const userNum = prompt("숫자의 간격을 입력해주세요");
  //   setStep(userNum);
  // };

  // useEffect(() => {
  // 컴포넌트가 생성됐을때 딱 한번 실행
  // 미션1-1: 사용자의 이름 입력 받기
  //   const name = prompt("이름을 입력해 주세요");
  //   setUserName(name);
  // }, []);

  //view
  return (
    <div>
      Home
      <TodoList />
      <Move />
      {/* 인사말 컴포넌트 */}
      {/* <Greeting userName={userName} userAge={20} userMBTI={"ENTJ"} /> */}
      {/* counter 컴포넌트 */}
      {/* <Counter step={step} /> */}
      {/* <button type="button" onClick={userStep}>
        간격선택
      </button>
      <Counter step={10} /> */}
      {/* 카드 컴포넌트 */}
      {/* <div className="card-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
};

export default Home;
