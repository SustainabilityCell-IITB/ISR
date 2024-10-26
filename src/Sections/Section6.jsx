import React from "react";
import "./Section6.css";  // Create this CSS file to style your component
import SDG16 from '../assets/images/sdg16.svg'
import SDG17 from '../assets/images/sdg17.svg'
import S6img1 from '../assets/images/S6img1.png'
import S6img2 from '../assets/images/S6img2.png'

const Section6 = () => {
    return (
        <div className="dashboard-container"  id="Section6">
      {/* Top left: Governance and Global Partnerships */}
      <div className="section top-left">
        <h2>6: Governance and Global Partnerships</h2>
        <p>
        IIT Bombay has been actively involved in various initiatives and undertakings to strengthen the institution and form robust global partnerships for sustainable development. The institute has several student bodies like the Sustainability Cell, Abhyuday, Team SHUNYA, Team Zero Waste, and NSS, that are dedicated to promoting sustainable activities on campus by collaborating with corporations, academic institutions, and stakeholders. Additionally, the Centre for Policy Studies (CPS) at IIT Bombay plays a vital role in promoting good governance and sustainable partnerships. The CPS collaborates with other research centres like the Humanities and Social Science (HSS) Department, the school of management (SJMSOM), the Industrial Design Centre (IDC), and the Centre for Technology Alternatives for Rural Areas (CTARA) to conduct research on various policy issues. Through its rigorous research and analyses, CPS generates innovative ideas to further IIT Bombay's commitment to advancing sustainability and promoting responsible governance practices.
        </p>
        <p>
        IIT Bombay has signed Memorandums of Understanding (MoUs) to enhance collaboration with the Maharashtra University of Health Sciences (MUHS) and the Technical University of Denmark. The first collaboration aims to bring together the technological advancements of IIT Bombay and the expertise in health sciences of MUHS, providing opportunities for interdisciplinary research and development in the field of health sciences, while the second fosters a partnership between leading researchers from both India and Denmark, who are committed to addressing global challenges. These MoUs signify the Institute's commitment to international collaboration for sustainable development goals.
        </p>
        <p>
        Moreover, IIT Bombay's Energy Club hosted the International Energy Symposium in collaboration with the energy clubs of TU Delft Netherlands and NTU Singapore. The symposium brought together people from different sectors to discuss pertinent technical and social aspects of green energy. The event shed light on specialized topics like green hydrogen, smart grids, and green economics, as well as social issues like promoting the inclusion of women and marginalized groups in energy policy discussions.
        </p>
      </div>

      {/* Top right: SDG Icons and Image */}
      <div className="section top-right">
        <div className="sdgImages">
          <img src={SDG16} alt="SDG 16" className="sdg-icon" />
          <img src={SDG17} alt="SDG 17" className="sdg-icon" />
        </div>
        <div className="image-container">
          <img src={S6img1} alt="Governance Image" />
        </div>
      </div>

      {/* Bottom left: Image */}
      <div className="section bottom-left">
        <img src={S6img2} alt="Research Image" className="full-width-image" />
      </div>

      {/* Bottom right: Research and Development */}
      <div className="section bottom-right">
        <h3>Research and Development</h3>
        <p>
        IIT Bombay researchers have contributed to Governance and Global Partnership in numerous ways. Research promoting security applications and strong institutions attracts universities from all over the world to join hands with IIT Bombay. For example, a collaboration between IIT Bombay and Monash University in Australia - the IITB-Monash Research Academy - fosters a solutions-driven approach to solving global problems by providing PhD training on a sizable scale, taking the lead in resolving some of the biggest problems of our time. Some other remarkable research projects done at IIT Bombay include employing multi-resolution ML for touchless biometric applications for defence and security, and ‘Vajra - Threat Detection and Response in Linux End Points’, a ground-breaking malware protection initiative.
        </p>
        <div className="line"></div>
      </div>
    </div>
    );
  };
  
export default Section6;


