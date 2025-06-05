import styled from "./header.module.css";
import { Link } from "react-router-dom";

function Header(isDarkMode) {
  // console.log(isDarkMode)
  return (
    <>
      <div className={styled.headerWrapper}>
        
        <div className="container">
          <div className={styled.header}>
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
                <Link to="/search">جستجوی مقاله</Link>
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
