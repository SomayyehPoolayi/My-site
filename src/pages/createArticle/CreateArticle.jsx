import { useState } from "react";
import Header from "../../components/header/Header";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import TextArea from "../../components/textArea/TextArea";
import axios from "axios";

function CreateArticle() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [article, setArticle] = useState({
    title: "",
    date: "",
    keyWords: "",
    publication: "",
    message: "",
  });

  const handleChangeArticle = (e) => {
    // eslint-disable-next-line default-case
    //   switch (e.target.name) {

    //     case "title":
    //       setArticle((prevState) => ({
    //         ...prevState,
    //         title: e.target.value,
    //       }));
    //       break;

    //       case "date":
    //       setArticle((prevState) => ({
    //         ...prevState,
    //         date: e.target.value,
    //       }));
    //       break;

    //       case "keyWords":
    //       setArticle((prevState) => ({
    //         ...prevState,
    //         keyWords: e.target.value,
    //       }));
    //       break;

    //       case "publication":
    //       setArticle((prevState) => ({
    //         ...prevState,
    //         keyWords: e.target.value,
    //       }));
    //       break;
    //   }
    // };

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

  const handleCreateNewArticle=()=>{
    axios.post("http://localhost:8000/articles",
      {
       "id":article.id,
      "imageUrl": article.imageUrl,
      "title": article.title,
      "pageNumbers":article.pageNumbers,
      "date":article.date,
      "journal":article.publication,
      })
  }

  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <div className={styled.inputWrapper}>
          <form action="">
            <Input
              label="عنوان"
              name="title"
              handleChange={handleChangeArticle}
              type="text"
            />

            <Input
              label="تاریخ"
              name="date"
              handleChange={handleChangeArticle}
              type="text"
            />

            <Input
              label="کلمات کلیدی"
              name="keyWords"
              handleChange={handleChangeArticle}
              type="text"
            />

            <Input
              label="محل انتشار "
              name="publication"
              handleChange={handleChangeArticle}
              type="text"
            />

            <TextArea label="خلاصه مقاله" handleChange={handleChangeMessage} />
          </form>


            <button className={styled.buttonWrapper} onClick={handleCreateNewArticle}>ثبت مقاله </button>
          </div>
        
      </div>
    </>
  );
}
export default CreateArticle;
