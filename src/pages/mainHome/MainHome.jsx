import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styled from "./mainHome.module.css";
import { useEffect } from "react";

function MainHome(props,isDarkMode) {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName;
 
  // useEffect (()=>{
  //   if(!(location.state?.loggedIn)){alert("لطفا ابتدا وارد شوید")
  //     navigate("/InputPage")
  //   }
  // })
  
  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی"  />

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
