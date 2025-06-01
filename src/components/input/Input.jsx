
import styled from "./input.module.css";

function Input(props) {
    
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
export default Input;
