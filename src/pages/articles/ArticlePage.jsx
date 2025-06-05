import styled from "./articlepage.module.css";
import Header from "../../components/header/Header";
import Article from "../../components/articles/Article";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import Footer from "../../components/footer/Footer";

function ArticlePage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <div className={styled.articlePageWrapper}>
          <h2>آخرین مقالات</h2>

          {isLoading ? (
            <p>
              <Loading />
            </p>
          ) : (
            <div className={styled.article}>
              {articles.map((article) => (
                <Link to={`/this-article/${article.id}`}>
                  <Article key={article.id} article={article} />
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
     
      <Footer />
    </>
  );
}
export default ArticlePage;
