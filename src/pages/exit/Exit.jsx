import Header from "../../components/header/Header";
import styled from "./exit.module.css";
import React from "react";
function Exit() {
  const handleReturn = () => {
    console.log("come back");
  };

  return (
    <div className="container">
      <Header title="سمیه پولایی" />

      <div className={styled.exitWrapper}>
        <h1> به امید دیدار </h1>
      </div>

      <>
        <button className={styled.returnButton} onClick={handleReturn}>
           ورود دوباره
        </button>
      </>
    </div>
  );
}
export default Exit;
