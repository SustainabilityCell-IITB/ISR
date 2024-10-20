import Section1 from "./Sections/Section1.jsx";
import Section3 from "./Sections/Section3.jsx";
import Home from "./Sections/BannerSection.jsx";
import IntroSection from "./Sections/IntroSection.jsx";
import Section2 from "./Sections/Section2.jsx";
import Section4 from "./Sections/Section4.jsx";
import Section5 from "./Sections/Section5.jsx";
import Section6 from "./Sections/Section6.jsx";
import Footer from "./Sections/Footer.jsx";
import "./MainBody.css";

function MainBody() {
  return (
    <div className="MainBody">
      <Home></Home>
      <IntroSection></IntroSection>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Footer></Footer>
    </div>
  );
}

export default MainBody
