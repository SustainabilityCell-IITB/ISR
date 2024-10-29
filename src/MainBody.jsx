import Section3 from "./Sections/Section3.jsx";
import Home from "./Sections/BannerSection.jsx";
import IntroSection from "./Sections/IntroSection.jsx";
import Section2 from "./Sections/Section2.jsx";
import Section4 from "./Sections/Section4.jsx";
import Section6 from "./Sections/Section6.jsx";
import Section5 from "./Sections/Section5.jsx";
import Footer from "./Sections/Footer.jsx";
import Section1 from "./Sections/Section1.jsx";
import DownloadSection from "./Sections/DownloadSection.jsx";
import "./MainBody.css";

function MainBody() {


  // const SectionObj = document.getElementsByClassName('Section')
  // console.log(SectionObj)

  // SectionObj.forEach(element => {
  //   console.log(element.getBoundingClientRect)
  // });


  return (
    <div className="MainBody">
      <Home></Home>
      <IntroSection></IntroSection>
      <hr />
      <Section1></Section1>
      <hr />
      <Section2></Section2>
      <hr />
      <Section3></Section3>
      <hr />
      <Section4></Section4>
      <hr />
      <Section5></Section5>
      <hr />
      <Section6></Section6>
      <hr />
      <DownloadSection></DownloadSection>
      <Footer></Footer>
    </div>
  );
}

export default MainBody
