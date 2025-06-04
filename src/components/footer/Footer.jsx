import styled from "./footer.module.css";

function Footer(isDarkMode) {
  return (
    <div
      className={`${styled.headerWrapper} ${
        isDarkMode ? styled.darkMode : styled.lightMode
      }`}
    >
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
      <p>
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شخص حقیقی سمیه پولایی محفوظ است (2025 )
      </p>

    </div>
  );
}

export default Footer;
