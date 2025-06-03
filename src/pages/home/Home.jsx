import Header from "../../components/header/Header";
import styled from "./home.module.css";

function Home(props) {
  return (
    <div className={styled.homeWrapper}>
      <div className="container">
       
        <Header title="سمیه پولایی" />

        <h1> ; به وب سایت من خوش آمدید</h1>
        <br />
        <h2>" جایی برای معرفی خودم, دیدگاها و تجربیات حرفه ای ام "</h2>     
      
      </div>
    </div>
  );
}
export default Home;
