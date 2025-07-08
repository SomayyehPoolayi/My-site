import {  useState } from "react";
import styled from "./header.module.css";
import { Link } from "react-router-dom";


function Header(props, isDarkMode) {


  return (
    <>
      <div className={styled.headerWrapper}>
        <div className="container">
          <div className={styled.header}>
            <div className={styled.userName}>
             

                <p>سلام {props.userName}</p>
             
            </div>

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
