import { useState } from "react";
import Header from "../../components/header/Header";
import styled from "./createArticle.module.css";
import InputArticle from "../../components/input/InputArticle";
import TextArea from "../../components/textArea/TextArea";
import axios from "axios";
import Footer from "../../components/footer/Footer";

function CreateArticle(isDarkMode) {
  const [textAreaValue, setTextAreaValue] = useState("");

  const [article, setArticle] = useState({
    title: "",
    date: "",
    keyWords: "",
    publication: "",
    message: "",
  });

  const handleChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.message]: e.target.value,
    }));
  };

  const handleCreateNewArticle = () => {
    axios.post("http://localhost:8000/articles", {
      id: article.id,
      imageUrl: article.imageUrl,
      title: article.title,
      pageNumbers: article.pageNumbers,
      date: article.date,
      journal: article.publication,
      content:article.message,
      language:article.language
    });
  };

  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <>
          <div className={styled.inputWrapper}>
            <form action="" className={styled.form}>
              <InputArticle
                label="عنوان"
                name="title"
                handleChange={handleChangeArticle}
                type="text"
              />

              <InputArticle
                label="تاریخ"
                name="date"
                handleChange={handleChangeArticle}
                type="text"
              />

              <InputArticle
                label=" صفحات"
                name="pageNumbers"
                handleChange={handleChangeArticle}
                type="number"
              />

              <InputArticle
                label=" زبان"
                name="language"
                handleChange={handleChangeArticle}
                type="text"
              />

              <InputArticle
                label="محل انتشار "
                name="publication"
                handleChange={handleChangeArticle}
                type="text"
              />

              <TextArea
                label="خلاصه مقاله"
                name="message"
                handleChange={handleChangeMessage}
              />
              <button
                className={styled.buttonWrapper}
                onClick={handleCreateNewArticle}
              >
                ثبت مقاله{" "}
              </button>
            </form>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
}
export default CreateArticle;
