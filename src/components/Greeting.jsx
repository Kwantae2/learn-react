import React from "react";

const Greeting = () => {
  // logic
  const userName = "김관태";
  const textClass = "test-red";

  // basic style
  // camel: basicStyle
  // Pascal: basicStyle
  // snake: basic-style

  // view
  return (
    <div className={`greeting-title ${textClass}`}>
      <h1>안녕하세요 {userName}님!!</h1>
      <p>오늘하루도 시원한 하루 되세요!!</p>
    </div>
  );
};

export default Greeting;
