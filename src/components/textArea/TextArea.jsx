import styled from "./textArea.module.css";
function TextArea(props) {
  return (
    <div className={styled.textareaWrapper}>
      <label>{props.label}</label>
      <textarea>{props.handleChange}</textarea>
    </div>
  );
}
export default TextArea;
