import Header from "../../components/header/Header";
import styled from "./aboutMe.module.css";
import myPic from "../../assets/images/my-pic.jpg";
import { Link } from "react-router-dom";
import {openResume} from "../../utils/openResume"

function AboutMe(props) {


 return (
    <div className="container">
      <Header title="سمیه پولایی" />

      <div className={styled.aboutMeWrapper}>
        <img src={myPic} />

        <div className={styled.buttonWrapper}>
          
          <Link to="/about-me/my-biography">
            <button>زندگینامه حرفه ای من</button>
          </Link>

          <Link>
            <button onClick={openResume}> رزومه من</button>
          </Link>

          <Link to="/about-me/my-contact">
            <button >راههای ارتباطی با من</button>
          </Link>
        
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
