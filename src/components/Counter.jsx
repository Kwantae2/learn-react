import React, { useState } from "react";

const Counter = ({ step }) => {
  console.log("🚀 ~ Counter ~ step:", step);
  //logic
  // state라는 특별한 변수
  const [countState, setCountState] = useState(0);
  //첫번째 data, 두번째 함수!! 헷갈리지 말것!!

  // 구조분해할당
  // const person = {
  //   name: "후츠릿",
  //   age: 35,
  // };

  // const { age, name } = person;
  // console.log("🚀 ~ Counter ~ name:", name);
  // console.log("🚀 ~ Counter ~ age:", age);

  // // 배열로 된 구조분해 할당
  // const animals = ["개", "고양이", "앵무새"];
  // // 미션 : 각각의 값들을 구조분해할당으로 뽑아와서 콘솔에 출력하기
  // const [first, second, third] = animals;
  // console.log("🚀 ~ Counter ~ first:", first);
  // console.log("🚀 ~ Counter ~ second:", second);
  // console.log("🚀 ~ Counter ~ third:", third);

  const handleIncrease = () => {
    console.log(`+${step}`);
    setCountState(countState + step);
  };

  const handleDecrease = () => {
    console.log(`-${step}`);
    setCountState(countState - step);
    // setCountState((prev) => prev - 1);
  };

  //view
  return (
    <div>
      <h1>Counter</h1>
      <div
        style={{
          fontSize: "36px",
        }}
      >
        {countState}
      </div>
      <div>
        <button type="button" onClick={handleIncrease}>
          +{step}
        </button>
        <button type="button" onClick={handleDecrease}>
          -{step}
        </button>
      </div>
    </div>
  );
};

export default Counter;
