import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styled from "./exit.module.css";

function Exit() {

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/Input");
  };

  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <div className={styled.exitWrapper}>
          <h1> به امید دیدار </h1>
        </div>
       
        <button className={styled.returnButton} onClick={handleReturn}>
          ورود دوباره
        </button>
      
      </div>
      <Footer />
    </>
  );
}
export default Exit;
