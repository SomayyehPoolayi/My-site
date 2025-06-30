import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import styled from "./inputPage.module.css";
import HomeHeader from "../../components/homeHeader/HomeHeader";

function InputPage() {
   const navigate = useNavigate();
 
   const handleRegisterPage= () => {
    navigate("/Register");
  };

  return (
    <>
      <div className="container">
        <HomeHeader title="سمیه پولایی" />

        <>
          <div className={styled.inputWrapper}>
            <form action="" className={styled.form}>
              <>
               <div>
                <label htmlFor="">نام کاربری</label>
                <input type="text" />
              </div>

              <div>
                <label htmlFor=""> رمز عبور</label>
                <input type="password" />
              </div>
              </>
             

              <div className={styled.buttonPart}>
                <div>
                  <p>قبلا ثبت نام نکرده ام</p>
                  <button
                    onClick={handleRegisterPage}
                    className={styled.buttonWrapper}
                  >
                    ثبت نام
                  </button>
                </div>

                <div>
                    <p>قبلا ثبت نام کرده ام</p>
                  <button
                    // onClick={handleUser}
                    className={styled.buttonWrapper}
                  >
                    ورود
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      </div>
      
      <Footer />
    </>
  );
}
export default InputPage;
