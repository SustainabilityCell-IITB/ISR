import React from "react";
import "./Section5.css"; // Create this CSS file to style your component
import SDG13 from "../assets/images/sdg13.svg";
import SDG14 from "../assets/images/sdg14.svg";
import SDG15 from "../assets/images/sdg15.svg";
import S5img1 from "../assets/images/S5img1.png";

import "./Section.css"

const Section5 = () => {
  return (
    <div className="container"  id="Section5">
      {/* Top left part: Heading and written content */}
      <div className="top-left">
        <h1>5: Holistic Environmental Protection</h1>
        <p>
          IIT Bombay is actively engaged in preserving and safeguarding the
          environment with a focus on addressing climate change, reducing waste,
          cleaning up polluted water sources, and adopting pollution prevention
          methods. The administration and student bodies are making substantial
          efforts towards achieving a climate-positive campus.
        </p>
        <p>
          NSS has organised conservation activities such as tree plantation
          drives, green Diwali campaigns, and paper recycling drives to improve
          air quality, protect biodiversity, and promote an eco-friendly campus.
          Talks on waste reduction in critical regions of India are also being
          conducted, with the aim of promoting eco-friendliness. Abhyuday has
          initiated a nationwide tree plantation drive called “Grow Green Gold”
          to combat deforestation.
        </p>
        <p>
          Additionally, it conducts regular clean-up drives at lakes and
          beaches, collecting a large quantity of debris, thereby educating
          people about the impact of pollution and encouraging them to adopt
          sustainable practices to reduce their environmental footprint.
        </p>
        <p>
          The institute has also introduced electric buggies for eco-friendly
          transportation to lower its carbon footprint and promote
          sustainability. The Industrial Design Centre (IDC) in collaboration
          with NSS, has been promoting the use of eco-friendly materials for
          making Ganesha idols for the past 20 years. This initiative prevents
          toxic paint materials from contaminating water bodies during the
          immersion of the idols.
        </p>
      </div>

      {/* Top right part: SDG icons, written content, and quote */}
      <div className="top-right">
        <div className="sdg-icons">
          <img src={SDG13} alt="Goal 13: Climate Action" />
          <img src={SDG14} alt="Goal 14: Life Below Water" />
          <img src={SDG15} alt="Goal 15: Life on Land" />
        </div>
        <p>
          Abhyuday's efforts extend to the preservation of local ecosystems
          through regular clean-up drives at Powai Lake and Versova Beach. These
          initiatives are integral to raising awareness among the institute
          community and the public about environmental conservation. The Powai
          Lake Mega clean-up, with over 800 volunteers, resulted in the
          collection of more than 2.5 tonnes of solid waste along the lake's
          banks, illustrating the significant impact of community-driven
          environmental initiatives. These activities not only contribute to
          preserving natural resources but also educate individuals on the
          importance of sustainable practices for reducing pollution and
          maintaining a cleaner environment.
        </p>
        <p className="quote">
          “The environmental problems of developing countries are not the side
          effects of excessive industrialisation but reflect the inadequacy of
          development.”
          <br />
          Indira Gandhi
          <br />
          <i>Former Prime Minister of India</i>
        </p>
      </div>

      {/* Middle part: Image of lake cleanup */}
      <div className="middle">
        <img src={S5img1} alt="Volunteers cleaning a lake" />
      </div>

      {/* Bottom left part: Research and Development heading and content */}
      <div className="bottom-left">
        <h2>Research and Development</h2>
        <p>
          IIT Bombay is actively engaged in environmental research across
          departments, especially technical and social sciences, to combat
          climate change. The interdisciplinary program in climate studies,
          established in 2012, is one of India's first doctoral programs
          focusing on climate change research. Researchers are developing
          technologies to reduce carbon footprints and promote sustainable
          development, such as the Multi Utility Vapor Compression System
          (MUVCS) and novel fabrication techniques for producing hydrogen.
        </p>
      </div>

      {/* Bottom right part: Remaining content of Research and Development */}
      <div className="bottom-right">
        <p>
          The institute is also involved in preserving aquatic and marine
          ecosystems by developing models for coastal protection and conducting
          research on local wave dynamics and sediment dynamics. Advanced
          wastewater treatment technologies and preservation of land
          biodiversity are also being studied. Noteworthy projects include
          preserving mangrove ecosystems, understanding the impact of
          developmental activities on wetlands, and identifying degraded forests
          to develop effective restoration plans. The institute is also involved
          in increasing awareness on climate change and its consequences through
          panel discussions and science-based competitions.{" "}
        </p>
      </div>
    </div>
  );
};

export default Section5;
