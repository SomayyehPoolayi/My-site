import "./App.css";
import AboutMe from "./pages/aboutMe/AboutMe";
import ArticlePage from "./pages/articles/ArticlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import Exit from "./pages/exit/Exit";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/search/Search";
import ThisArticle from "./pages/thisArticle/ThisArticle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles-page" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/logout" element={<Exit />} />
        <Route path="/search" element={<Search />} />
         <Route path="/register" element={<Register/>} />
         <Route path="/this-article/:id" element={<ThisArticle />} />
      </Routes>
    </div>
  );
}

export default App;
