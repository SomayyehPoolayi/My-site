import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styled from "./register.module.css";
import { useState } from "react";
import InputUser from "../../components/inputUsers/InputUser";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    passWord: "",
    email: "",
  });

  const handleRegister = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddNewUser = () => {
    axios.post("http://localhost:10000/users", {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      passWord: user.passWord,
      email: user.email,
    });
  };

  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <>
          <div className={styled.registerWrapper}>
            <form action="" className={styled.form}>
              <InputUser
                label="نام"
                name="firstName"
                handleChange={handleRegister}
                type="text"
              />
             
              <InputUser
                label="نام خانوادگی"
                name="lastName"
                handleChange={handleRegister}
                type="text"
              />
             
              <InputUser
                label="نام کاربری"
                name="userName"
                handleChange={handleRegister}
                type="text"
              />
             
              <InputUser
                label=" رمز عبور"
                name="passWord"
                handleChange={handleRegister}
                type="password"
              />
             
              <InputUser
                label=" ایمیل "
                name="email"
                handleChange={handleRegister}
                type="email"
              />
             
              <button
                onClick={handleAddNewUser}
                className={styled.buttonWrapper}
              >
                ثبت نام 
              </button>{" "}
            
            </form>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
}
export default Register;
