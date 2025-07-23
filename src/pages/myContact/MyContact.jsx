import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Email from "./email";
import GitHub from "./gitHub";
import Linkedin from "./linkedIn";
import styled from "./myContact.module.css";
import Phone from "./phone";
import Telegram from "./telegram";

function MyContact() {
  return (
    <>
      <div className="container">
        <Header title="سمیه پولایی" />

        <>
          <div className={styled.contactWrapper}>
            <h3>میتوانید از طریق راههای زیر با من در تماس باشید</h3>
            {/* //phone // */}
            <div className={styled.phone}>
              <p>0098 - 9155011902</p>
              <Phone className={styled.phonCell} />
            </div>

            {/* //telegram// */}
            <div className={styled.telegram}>
              <p>@SomayehPoolayi</p>
              <Telegram className={styled.telegramIcon} />
            </div>

            {/* //Email// */}
            <div className={styled.email}>
              <div>
                <p>somayeh_ply@yahoo.com</p>
                <p>somayeh.ply@gmail.com</p>
              </div>
              <Email className={styled.emailIcon} />
            </div>

            {/* //linkedIn// */}
            <div className={styled.linkedIn}>
              <p>https://www.linkedin.com/in/somayeh-poolayi-86748725</p>
              <Linkedin className={styled.LinkedInIcon} />
            </div>

            {/* //github// */}
            <div className={styled.gitHub}>
              <p>https://github.com/SomayyehPoolayi</p>
              <GitHub className={styled.gitHubIcon} />
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
}
export default MyContact;
