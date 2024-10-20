import IntroImg1 from "../assets/images/IntroImg1.jpg";
import "./IntroSection.css";

function IntroSection() {
  return (
    <div className="Section IntroSection" id="IntroSection">
      <div className="IntroText1">
        <h2>Executive Summary</h2>
        <p>
          This report has been drafted keeping in mind the 17 UN Sustainable
          Development Goals (SDGs) and their 169 target indicators. Naturally,
          it often becomes difficult to comprehend the overall picture while
          examining individual SDGs, especially due to their interconnectedness.
          To make the executive summary more digestible, we group the SDGs into
          'pillars' of sustainability, linked to each other through the 'Overall
          Sustainability Framework'. The framework envisages people at the
          centre, with the 17 SDGs meaningfully integrated into 6 pillars - each
          contributing to enhancing the development process.
        </p>
      </div>
      <div className="IntroImg">
        <img src={IntroImg1} alt="" />
      </div>
      <div className="IntroQuote">
        <p className="quote">
          “This is the moment when we must come together to save this planet.
          Let us resolve that we will not leave our children a world where the
          oceans rise and famine spreads and terrible storms devastate our
          lands.”
        </p>
        <p className="person-name">Barack Obama</p>
        <p className="person-info">44th president of the United States</p>
      </div>
    </div>
  );
}

export default IntroSection;
