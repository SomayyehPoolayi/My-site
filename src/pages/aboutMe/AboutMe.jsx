import Header from "../../components/header/Header";
import styled from "./aboutMe.module.css";

function AboutMe() {
  return (
    <div className="container">
      <Header title="سمیه پولایی" />

      <div className={styled.aboutMeWrapper}>
        <img src="" alt="" />
        <div>
          <h3>سلام!</h3>
          <p>من سمیه پولایی هستم...</p>
          <p> جهت آشنایی بیشتر میتوانید از گزینه های زیر استفاده کنید</p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
