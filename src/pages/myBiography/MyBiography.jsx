import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styled from "./myBiography.module.css";

function MyBiography() {
  return (
    <div className="container">
      <Header title="سمیه پولایی" />
    
      <>
        {" "}
        <section className={styled.biographyWrapper}>
          <div className={styled.persian}>
            <p>
              مدرس دانشگاه و طراح فرانت‌اند وب هستم با بیش از ۱۴ سال سابقه تدریس
              دروس تخصصی کامپیوتر و فناوری اطلاعات در دانشگاه‌های مختلف . در حال
              حاضر در دانشگاه آزاد مشهد، دانشگاه سما، دانشگاه آزاد اسلامشهر و
              چندین مؤسسه آموزش عالی دیگر از جمله توس، اقبال لاهوری، بهار،
              فردوس، جهاد دانشگاهی، علمی‌ـ‌صنعتی خراسان فعالیت دارم.
            </p>
            <p>
              دارای مدرک کارشناسی ارشد فناوری اطلاعات از دانشگاه صنعتی شریف هستم
              و تمرکز اصلی من بر ترکیب آموزش آکادمیک با کاربردهای عملی فناوری
              است.
            </p>
            <p>
              همزمان با تدریس دانشگاهی، به صورت حرفه‌ای در زمینه طراحی رابط
              کاربری (UI) و توسعه فرانت‌اند وب‌سایت‌ها فعالیت دارم. تلاش می‌کنم
              با استفاده از جدیدترین تکنولوژی‌ها و استانداردها، تجربه‌ای مدرن و
              کاربرپسند برای کاربران وب ایجاد کنم.
            </p>
          </div>

          <br />
          <div className={styled.english}>
            <p>
              I am a university lecturer and front-end web developer with over
              14 years of experience in teaching specialized courses in Computer
              Science and Information Technology across various universities.
            </p>
            <p>
              Currently, I am teaching at Azad University of Mashhad, Sama
              University, Islamshahr Azad University, and several higher
              education institutes including Toos, Eqbal Lahoori, Bahar,
              Ferdows, Jihad University, and Khorasan Institute of Science &
              Technology.
            </p>
            <p>
              I hold a Master’s degree in Information Technology from Sharif
              University of Technology. Alongside my academic work, I work
              professionally as a front-end web developer. I specialize in
              creating user-friendly, modern web interfaces using up-to-date
              technologies and best practices in UI development.
            </p>
          </div>
        </section>
      </>

      <Footer />
    </div>
  );
}
export default MyBiography;
