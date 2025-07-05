import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import styled from "./inputPage.module.css";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import { useState } from "react";
import axios from "axios";

function InputPage(props, isDarkMode) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      const matchedUser = users.find(
        (user) => user.userName === username && user.passWord === password
      );

      if (matchedUser) {
        alert("ورود موفقیت آمیز بود");
        navigate("/MainHome", {
          state: {
            loggedIn: true,
            userName: matchedUser.userName,
          },
        });
      } else {
        alert("نام کاربری یا رمز عبور اشتباه است");
      }
    } catch (error) {
      console.error("خطا در گرفتن داده‌ها:", error);
      alert("خطا در برقراری ارتباط با سرور");
    }
  };

  const handleRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="container">
        <HomeHeader title="سمیه پولایی" />

        <>
          <div className={styled.inputWrapper}>
            <form action="" className={styled.form} onSubmit={(e)=>e.preventDefault()}>
              <>
                <div>
                  <label htmlFor="">نام کاربری</label>
                  <input
                    type="text"
                    placeholder="نام کاربری"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor=""> رمز عبور</label>
                  <input
                    type="password"
                    placeholder="رمز عبور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
                    onClick={handleLogin}
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
