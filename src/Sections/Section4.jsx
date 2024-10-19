import "../Sections/Section.css";
import "../Sections/Section4.css";
import sdg8 from "../assets/images/sdg8.jpg";
import sdg9 from "../assets/images/sdg9.jpg";
import S4img1 from "../assets/images/S4img1.jpg";

function Section4() {
    return (
      <div className="Section" id="Section4">
        <div className="topBar">
          <div className="text">
            <h3>4: Sustainable Growth</h3>

            <p>IIT Bombay is focused on developing novel and sustainable techniques to enhance holistic industrial and individual growth. The Desai Sethi School of Entrepreneurship and the Entrepreneurship Cell are essential components of the institute's entrepreneurship ecosystem, providing courses, mentoring programs, and events that promote innovation and entrepreneurship. As a result of their efforts, the institute has established countless start-ups, contributing to job creation, new technology development, and economic growth. Additionally, the Technology Business Incubator hosted by the Centre of Policy Studies plays a critical role in supporting technology-based start-ups, providing an enabling environment for their success and facilitating the commercialization of innovative technologies. Abhyuday, the social welfare student body, organizes Profectus, an annual fellowship program to provide a platform for students to engage with the social sector, develop skills, and make an impact through workshops, mentorship and activities.</p>

            <p>The institute has a Society for Innovation and Entrepreneurship that hosts a business incubator supporting not only technology-based entrepreneurship but also social impact through the creation of startups. The National Centre of Excellence in Carbon Capture and Utilization was set up to enhance sustainable industrial growth by researching and developing innovative techniques for capturing and using carbon, improving hydrocarbon recovery, and converting carbon dioxide to chemicals.</p>

            <p>Abhyuday's Social Innovation Challenge and Action Plan inspire students across India to address environmental and social issues through science and entrepreneurship. IIT Bombay's Tinkerer's Lab is a legacy initiative providing a space for engineering students to innovate, prototype and develop impactful products equipped with advanced tools and technology for sustainable development.</p>


          </div>

        
          <div className="text">

            <div className="sdgImages">
              <img src={sdg8} alt="" />
              <img src={sdg9} alt="" />
            </div>

            <h4>Pioneering Ultra High-Speed Micromachining in India</h4>

            <p>India's micromanufacturing arena is set for a transformative leap with Professor Ramesh Kumar Singh's Ultra High-speed Micromachining Center. This pioneering technology, a first in India, promises to mitigate vibrations and tool failure, putting it on par with leading international systems. It aims to enhance India's competitive edge in micromanufacturing, fostering a dynamic ecosystem for micro-manufacturing advancements and job creation. By offering high-speed solutions and services, it seeks to democratize access to micro-milling/drilling technologies, previously hindered by high costs and limited expertise.</p>

                    <p className="orange">“A nation that destroys its soils destroys itself. Forests are the lungs of our land, purifying the air and giving fresh strength to our people.”</p>
                        <p>Franklin D. Roosevelt</p>
                        <p>32nd president of the United States</p>
          </div>
        </div>
       
        <div className="section-image-container">
        
        </div>


        <div className="bottomBar">
          <div className="text">
          <img
          src={S4img1}
          className="section-image big"
          />
          </div>
          <div className="text">
            <h4>Research and Development</h4>

            <p>The researchers at IIT Bombay are committed to advancing sustainable technologies and improving the welfare of society through their work. They are actively developing innovative solutions to improve computing, infrastructure development, and manufacturing techniques, with a focus on technologies for humanitarian aid. Among their notable achievements are the customizable wire EDM and multi-wire EDM with reduced tension, ultra-high-speed micromachining center, improved blockchain networks, indigenous 5G network, soil strength estimators, thermal consolidometers with pore-pressure profiling, smart IoT devices, and UAVs for search missions. These efforts are a testament to the Institute's dedication to promoting sustainable practices and creating a positive impact on society.</p>

            <p>Projects such as SATU SMART's International Innovation Competition and the Unmanned Aerial Systems Cooperative Mission spearheaded by Prof. Hemendra Arya from the Aerospace Engineering department highlight IIT Bombay's dedication to pushing technological boundaries for societal benefit. The SATU SMART competition serves as a catalyst for fostering a culture of creativity and forward-thinking, providing participants with a platform to showcase inventive ideas and collaborate towards a more sustainable future. On the other hand, Prof. Arya's work on cooperative autonomous flight of unmanned aerial vehicles demonstrates the institute's focus on leveraging technology for humanitarian aid, disaster management, and search and rescue missions showcasing a clear commitment to sustainable growth and societal impact through cutting-edge research endeavors.</p>

          </div>
        </div>
      </div>
    );
  }
  
  export default Section4;
  