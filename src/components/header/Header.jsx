import styled from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";

function Header(isDarkMode) {
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

            <ul>
              <li>
                <Link to="/logout">خروج</Link>
              </li>

              <li>
                <Link to="/about-me">درباره من</Link>
              </li>

              <li>
                <Link to="/create-article">ساخت مقاله</Link>
              </li>

              <li>
                <Link to="/articles-page"> لیست مقالات</Link>
              </li>

              <li>
                <Link to="/">
                  <h3>سمیه پولایی</h3>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
