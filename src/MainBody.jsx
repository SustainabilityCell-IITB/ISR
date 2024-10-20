import Section1 from "./Sections/Section1.jsx";
import Section3 from "./Sections/Section3.jsx";
import Home from "./Sections/BannerSection.jsx";
import IntroSection from "./Sections/IntroSection.jsx";
import Section2 from "./Sections/Section2.jsx"
import Section4 from "./Sections/Section4.jsx"
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
    </div>
  );
}

export default MainBody
