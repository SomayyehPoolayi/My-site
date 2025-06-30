import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styled from "./mainHome.module.css";

function MainHome(props,isDarkMode) {
  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <div className={styled.homeWrapper}>
          <h1> شما با موفقیت وارد شدید </h1>
          <br />
         
          <h2>" هم اکنون میتوانید از سایت استفاده نمایید "</h2>
        </div>
     
      </div>
      <Footer />
    </>
  );
}
export default MainHome;
