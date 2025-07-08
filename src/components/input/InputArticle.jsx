
import styled from "./inputArticle.module.css";

function InputArticle(props) {
    
    return (
    <div className={styled.inputWrapper}>
      <label>{props.label} </label>
      <input
        type="text"
        name={props.name}
        onChange={props.handleChangeArticle}
      />
    </div>
  );
}
export default InputArticle;
