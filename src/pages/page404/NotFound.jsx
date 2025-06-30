import Header from "../../components/header/Header";
import styled from "./notFound.module.css"

function NotFound(isDarkMode) {
  return (
    <div className="container">
      <Header title="سمیه پولایی" />
      <h1 className={styled.notFoundWrapper}>404 error !!!</h1>
    </div>
  );
}
export default NotFound;
