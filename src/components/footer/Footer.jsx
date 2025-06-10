import Email from "../../pages/myContact/email";
import GitHub from "../../pages/myContact/gitHub";
import Linkedin from "../../pages/myContact/linkedIn";
import Telegram from "../../pages/myContact/telegram";
import AnimatedLogo from "../animatedLogo/AnimatedLogo";
import styled from "./footer.module.css";

function Footer(isDarkMode) {
  return (
    <>
      <div className={styled.footerWrapper}>
        
        <div className={styled.lastLine}>
          <>
          <div className={styled.icons}>
            <a href="https://github.com/SomayyehPoolayi" target="_blank">
              <GitHub />
            </a>

            <a href="https://t.me/SomayehPoolayi" target="_blank">
              <Telegram />
            </a>

            <a href="http://www.mail.yahoo.com" target="_blank">
              <Email />
            </a>

            <a
              href="https://www.linkedin.com/in/somayeh-poolayi-86748725"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>

          <p>
            برای استفاده از مطالب ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز
            برای شخص حقیقی سمیه پولایی محفوظ است (2025 &copy;)
          </p>
        </>
        <AnimatedLogo />
        </div>
      </div>
    </>
  );
}

export default Footer;
