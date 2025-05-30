import Header from "../../components/header/Header";
import styled from "./thisArticle.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <Header title="سمیه پولایی" />

      <div className={styled.thisArticleWrapper}>
        <div className="container">
          <h1> {article.title} </h1>

          <div className={styled.ThisArticleInfo}>
            <span>{article.date}</span>
            <span> {article.journal}  :</span>
            <img src={article.imageUrl} alt="" />
            <p>{article.content} </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ThisArticle;
