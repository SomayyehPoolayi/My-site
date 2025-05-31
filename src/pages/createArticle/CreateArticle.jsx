import { useState } from "react";
import Header from "../../components/header/Header";
import styled from "./createArticle.module.css";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    keyWords: "",
    publication:"git "
  });

  const handleChangeArticle = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "title":
        setArticle({ title: e.target.value });
        break;
      case "date":
        setArticle({ date: e.target.value });
        break;
      case "keyWords":
        setArticle({ keyWords: e.target.value });
        break;
         case "publication":
        setArticle({ keyWords: e.target.value });
        break;
    }
  };

  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <div className={styled.inputWrapper}>
          
          <form action="">
            <label htmlFor="">: عنوان مقاله </label>
            <input type="text" name="title" onChange={handleChangeArticle} />

            <label htmlFor=""> : تاریخ</label>
            <input type="text" name="date" onChange={handleChangeArticle} />

            <label htmlFor="">: کلمات کلیدی </label>
            <input type="text" name="keyWords" onChange={handleChangeArticle} />

             <label htmlFor="">:  محل انتشار </label>
            <input type="text" name="publication" onChange={handleChangeArticle} />
          </form>
       
        </div>
      </div>
    </>
  );
}
export default CreateArticle;
