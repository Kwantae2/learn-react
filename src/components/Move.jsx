import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Move = () => {
  // logic
  // 1.lnnk
  // 2.Navigate
  const history = useNavigate();

  const handlePageMove = () => {
    // 페이지 이동
    history("/contact");
  };

  // 미션 : Home버튼 만들어서 Home 화면으로 페이지 이동시키기

  // view
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <button type="button" onClick={handlePageMove}>
        Contact
      </button>
    </div>
  );
};

export default Move;
