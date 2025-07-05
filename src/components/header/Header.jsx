import { useEffect, useState } from "react";
import styled from "./header.module.css";
import { Link} from "react-router-dom";
import axios from "axios";

function Header(props,isDarkMode) {
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    axios
      .get("http://localhost:5000/users")
      .then((result) => {
        setUsers(result.data);
         })
      .catch((error) => {
        console.log(error);
            });
  }, []);



  return (
    <>
      <div className={styled.headerWrapper}>
        <div className="container">
          <div className={styled.header}>
            <div className={styled.userName}>
              
              { users ? (
                <p>سلام {users.userName}</p>
              ) : (
                alert("شما باید ثبت نام کنید")
              )
            }
            
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
