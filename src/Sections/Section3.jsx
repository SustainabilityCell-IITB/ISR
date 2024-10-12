import "../Sections/Section.css";
import "../Sections/Section3.css";
import sdg7 from "../assets/images/sdg7.jpg";
import sdg11 from "../assets/images/sdg11.jpg";
import sdg12 from "../assets/images/sdg12.jpg";
import S3img1 from "../assets/images/S3img1.jpg";
import S3img2 from "../assets/images/S3img2.jpg";

function Section3() {
  return (
    <div className="Section" id="Section3">

      <div className="topBar">
        <div className="image S3-img1">
          <img src={S3img1} alt="" />
        </div>
        <div className="text S3-text1">
          <h3>3: Sustainable Living</h3>
          <div className="sdgImages">
            <img src={sdg7} alt="" />
            <img src={sdg11} alt="" />
            <img src={sdg12} alt="" />
          </div>
          <p>
            IIT Bombay has undertaken numerous initiatives towards achieving
            sustainable living, promoting energy efficiency, clean energy, and
            sustainable production and consumption practices. To ensure energy
            efficiency, the institute has installed modern electric equipment,
            sensor-based lighting, waterless urinals, and solar water heaters in
            student hostels, and technologies like timed remote switches for lab
            equipment, among others. The Department of Energy Science &
            Engineering organizes an annual Energy Day event that showcases the
            latest research and innovations related to energy systems. The
            institute has also launched the Energy Swaraj Club, which works
            towards realizing energy security and climate change mitigation in
            India.
          </p>
          <p>
            Various student bodies are striving to make a positive impact on the
            campus population by encouraging people to incorporate
            sustainability into daily decision-making. The Sustainability Cell
            organized Airathon Mumbai, the world's second-largest air quality
            modeling competition, and is launching IIT Bombay's first-ever
            'Green Cup', to be awarded to the hostel generating the smallest
            carbon footprint per capita. Team SHUNYA stood second globally in
            the US Solar Decathlon Build Challenge 2023, having secured USD
            50,000 funding for developing net-zero housing. The Energy Club
            offered courses on global strategy, international relations,
            management, and fundamental energy as part of their Technical Summer
            School 2022.
          </p>
        </div>
      </div>

      
      <div className="bottomBar">
        <div className="text text2  ">
          <p>
            IIT Bombay has also taken initiatives to promote sustainable
            production and consumption practices on its campus. Waste
            segregation in campus hostels has been implemented to separate waste
            into three categories: wet (compostable) waste, dry (non-recyclable)
            waste, and recyclable waste, with educational initiatives such as
            speaker sessions on the recycling process. The campus also has
            several buildings with sensor-based lighting and water-efficient
            sprinkler tap systems to cut down on the wastage of electricity and
            water. The institute has an effective waste management system that
            diverts most of the waste from reaching landfills, employing a
            biogas plant and composting facilities to treat biodegradable waste.
          </p>
          <h4>Research and Development</h4>
          <p>
            Several professors are conducting research on cleaner energy and
            renewables, energy efficiency, carbon capture, and climate change
            mitigation using technological interventions. Some innovative
            projects include a 100-kWh solid state hydrogen storage device,
            sustainable and cost-effective Na-ion battery systems, natural
            sunlight-driven hydrogen generation from water, an integrated
            municipal solid waste management system, biogas-enriching CO₂/CH₄
            separation membranes, and a decentralized onsite sewage treatment
            plant.
          </p>
        </div>
        <div className="image S3-img2">
          <img src={S3img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
