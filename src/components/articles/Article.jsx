import styled from "./article.module.css";
// import articleImg from "../../../src/assets/images";

function Article() {
  return(
    <div className={styled.articleWrapper}>
        <img src="https://civilica.com/media/l/75224_tn.webp" />
        <h3>متغیرها</h3>
        <p>زمان مطالعه 5 دقیقه</p>

    </div>
  ) 
  
}
export default Article;
