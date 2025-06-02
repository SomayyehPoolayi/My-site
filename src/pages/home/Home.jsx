

import Header from "../../components/header/Header";
import styled from "./home.module.css";

function Home(props) {

  
  return (
    
    <div className={styled.homeWrapper}>
       <div className="container">
      <Header title="سمیه پولایی"  />
     
             <h1>Welcome my friend ...</h1>
       
      </div>
    </div>
  );
}
export default Home;
