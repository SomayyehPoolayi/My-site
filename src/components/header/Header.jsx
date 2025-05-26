import styled from "./header.module.css"
function Header(props){
  return(
<div className={styled.header}>
<ul>
  <li>خروج</li>
  <li>درباره من</li>
  <li>ساخت مقاله</li>
  <li>جستجوی مقاله</li>
  <li>لیست مقالات</li>
  <h3>{props.title}</h3>
</ul>
</div>
  )
}
export default Header;