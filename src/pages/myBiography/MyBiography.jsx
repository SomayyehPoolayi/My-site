import Header from "../../components/header/Header";
import styled from "./myBiography.module.css";

function MyBiography() {
  return (

      <div className="container">
        <Header title="سمیه پولایی" />

        <p className={styled.biographyWrapper}>بیوگرافی من</p>
      </div>
    
  );
}
export default MyBiography;
