import { Link, useNavigate } from "react-router-dom";
import styled from "./homeHeader.module.css";

function HomeHeader(isDarkMode) {
  const navigate = useNavigate();

  const handleRegisterInputPage = () => {
    navigate("/Input");
  };

  return (
    <>
      <div className={styled.headerWrapper}>
        <div className="container">
          <div className={styled.header}>
            <button
              className={styled.buttonWrapper}
              onClick={handleRegisterInputPage}
            >
              ثبت نام / ورود
            </button>

            <Link to="/">
              <h3>سمیه پولایی</h3>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeHeader;
