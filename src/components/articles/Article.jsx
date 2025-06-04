import styled from "./article.module.css";

function Article(props) {
  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageUrl} />

      <h3>{props.article.title}</h3>

      <p>زبان: {props.article.language}</p>

      <p> تعداد صفحات : {props.article.pageNumbers} </p>

          </div>
  );
}
export default Article;
