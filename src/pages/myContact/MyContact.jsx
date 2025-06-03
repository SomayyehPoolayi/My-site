import Header from "../../components/header/Header";
import styled from "./myContact.module.css";

function MyContact() {
  return (
    <div className="container">
      <Header title="سمیه پولایی" />
      <div className={styled.contactWrapper}>با من تماس بگیرید</div>
    </div>
  );
}
export default MyContact;
