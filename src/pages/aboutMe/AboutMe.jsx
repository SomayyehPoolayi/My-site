import Header from "../../components/header/Header";
import styled from "./aboutMe.module.css";
import myPic from "../../assets/images/my-pic.jpg";
import { Link } from "react-router-dom";
import { openResume } from "../../utils/openResume";
import MyBiography from "../myBiography/MyBiography";
import MyContact from "../myContact/MyContact";
import Footer from "../../components/footer/Footer";

function AboutMe(props,isDarkMode) {
  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <div className={styled.aboutMeWrapper}>
          <img src={myPic} />

          <div className={styled.buttonWrapper}>
            <Link to="/about-me/my-biography">
              <button onClick={<MyBiography />}>زندگینامه حرفه ای من</button>
            </Link>

            <Link>
              <button onClick={openResume}> رزومه من</button>
            </Link>

            <Link to="/about-me/my-contact">
              <button onClick={<MyContact />}>راههای ارتباطی با من</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AboutMe;
