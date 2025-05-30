import styled from "./loading.module.css";

function Loading() {
  return (
    <div className={styled.loaderWrapper}>
      <div className={styled.loader}></div>

      <span> ...در حال بارگزاری </span>
    </div>
  );
}
export default Loading;
