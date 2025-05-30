import styled from "./articlepage.module.css";
import Header from "../../components/header/Header";
import Article from "../../components/articles/Article";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ArticlePage() {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styled.articlePageWrapper}>
      <div className="container">
        <Header title="سمیه پولایی" />

        <h2>آخرین مقالات</h2>

        <div className={styled.article}>
          {articles.map((article) => (
            <Link to={`/this-article/${article.id}`}>
              <Article key={article.id} article={article} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ArticlePage;
