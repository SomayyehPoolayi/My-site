import Footer from "../../components/footer/Footer";
import styled from "./exit.module.css";
import HomeHeader from "../../components/homeHeader/HomeHeader";

function Exit(isDarkMode) {
  return (
    <>
      <div className="container">
        <HomeHeader title="سمیه پولایی" />

        <div className={styled.exitWrapper}>
          <h1> به امید دیدار </h1>
        </div>

      </div>
      <Footer />
    </>
  );
}
export default Exit;
