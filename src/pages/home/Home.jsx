import Footer from "../../components/footer/Footer";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import styled from "./home.module.css";

function Home(props) {
  return (
    <>
      <div className="container">
        <HomeHeader title="سمیه پولایی" />

        <div className={styled.homeWrapper}>
          <h1> ; به وب سایت من خوش آمدید</h1>
          <br />
          <br />
          <h2>" جایی برای معرفی خودم, دیدگاها و تجربیات حرفه ای ام "</h2>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
