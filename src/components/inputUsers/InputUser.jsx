import styled from "./inputUser.module.css"

function InputUser(props) {
    
    return (
    <div className={styled.inputWrapper}>
      <label>{props.label} </label>
      <input
        type=""
        name={props.name}
        onChange={props.handleRegister}
      />
    </div>
  );
}
export default InputUser;
