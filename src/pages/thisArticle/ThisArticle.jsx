import Header from "../../components/header/Header";
import styled from "./thisArticle.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";

function ThisArticle() {
  const params = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <>
          <div className={styled.thisArticleWrapper}>
            <h1> {article.title} </h1>

            <div className={styled.thisArticleInfo}>
              <img src={article.imageUrl} alt="" />
              <p>{article.date}منتشر شده در سال </p>
              <p> {article.journal} </p>
              <span>{article.content} </span>
            </div>
          </div>
        </>

         <Footer />
      </div>
    </>
  );
}
export default ThisArticle;
