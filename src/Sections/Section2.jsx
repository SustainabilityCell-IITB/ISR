import "../Sections/Section.css";
import "../Sections/Section2.css";
import sdg3 from "../assets/images/sdg3.jpg";
import sdg4 from "../assets/images/sdg4.jpg";
import sdg6 from "../assets/images/sdg6.jpg";
import S2img1 from "../assets/images/S2img1.jpg";

function Section2() {
    return (
      <div className="Section" id="Section2">
        <div className="topBar">
          <div className="text">
            <h3>2: Access to Basic Needs</h3>

            <p>
            IIT Bombay has harnessed its proficiency in innovation and
            technology to significantly augment the accessibility of fundamental
            necessities for all. Notably, the institute houses a hospital with
            skilled medical professionals, accessible to all members of the
            institute at a nominal cost. The Koita Centre for Digital Health
            (KCDH) set up at the institute is the first of its kind in India,
            focused on driving academic programs, research, and industry
            collaborations in Digital Health. Moreover, the institute has
            implemented exemplary mentorship models and student assistance
            systems, namely the Institute Student Mentorship Program (ISMP),
            Department Academic Mentorship Program (DAMP), and Student Wellness
            Centre (SWC), to ensure the holistic development of its students.
            </p>

          </div>

        
          <div className="text">

            <div className="sdgImages">
              <img src={sdg3} alt="" />
              <img src={sdg4} alt="" />
              <img src={sdg6} alt="" />
            </div>

            <p>
            IIT Bombay has established a remarkable reputation for providing an
            unparalleled and superlative educational experience, helping it
            consistently rank among India’s best universities in multiple
            prestigious university rankings. The institute has earned the
            distinction of being the first public institution in the country to
            establish a centre for liberal education, enabling students to
            explore their interests and design a tailored concentration while
            receiving necessary guidance. Additionally, the institute offers
            various courses and research opportunities specializing in
            sustainability, including an integrated bachelor's and master's
            program in technology.
            </p>

          </div>
        </div>
       
        <div className="section-image-container">
        <img
          src={S2img1}
          alt="Classroom of students"
          className="section-image big"
        />
        </div>


        <div className="bottomBar">
          <div className="text">
            <h4>Research and Development</h4>
            <p>
            IIT Bombay has developed in-house innovative solutions to a plethora
            of perils faced in the healthcare industry. Technologies like
            automatic radiology report generation from X-ray, MRI, CT, and
            ultrasound plates, an indigenous and affordable CAR-T cell platform
            to treat blood cancers, implantable electrocorticography (ECOG)
            probes for neuro-surgery and neuro-monitoring, and a 3-D scaffold
            matrix & bioresorbable screws for bone grafting and reconstruction
            have entirely revolutionised research in the healthcare industry.{" "}
            </p>
          </div>
          <div className="text">
            <p>
            The Centre for Technology Alternatives for Rural Areas (CTARA) at
            IIT Bombay has done exemplary work in identifying the sources of
            contamination for rural water and effectively addressing the same.
            CTARA has also conducted several training programs for rural
            communities to enhance their knowledge about the significance of
            clean drinking water and its maintenance.{" "}
            </p>
            <p>
            Moreover, the institute has employed an innovative Integrated
            Wetland Technology (IWT) to overcome the limitations of conventional
            sewage treatment plants by treating wastewater in a more advanced,
            efficient, and modern manner.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Section2;
  