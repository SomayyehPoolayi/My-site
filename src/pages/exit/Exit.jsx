import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styled from "./exit.module.css";

function Exit() {
  const handleReturn = () => {
    console.log("come back");
  };

  return (
    <div className="container">
      <Header title="سمیه پولایی" />

      <div className={styled.exitWrapper}>
        <h1> به امید دیدار </h1>

        <button className={styled.returnButton} onClick={handleReturn}>
          ورود دوباره
        </button>
      </div>

      <Footer />
    </div>
  );
}
export default Exit;
