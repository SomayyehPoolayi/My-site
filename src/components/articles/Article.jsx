import styled from "./article.module.css";


function Article(props) {
  return(
    <div className={styled.articleWrapper}>
        
        <h3>{props.article.title}</h3>

        <img src={props.article.imageUrl} alt="poster" />

        <p>زمان مطالعه : {props.article.readingTime} دقیقه</p>

    </div>
  ) 
  
}
export default Article;
