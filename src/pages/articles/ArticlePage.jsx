import styled from "./articlepage.module.css";
import Header from "../header/Header";
import Article from "../../components/articles/Article";

function ArticlePage() {
  return (
    <div className={styled.articlePageWrapper}>
      <Header />
      <h2>آخرین مقالات</h2>
      <div className={styled.article}>
        <Article />
      </div>
    </div>
  );
}
export default ArticlePage;
