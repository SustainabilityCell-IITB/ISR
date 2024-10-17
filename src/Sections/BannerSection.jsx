import "./BannerSection.css"
import IITBLogo from "../assets/images/IITB-Logo.png"

function BannerSection(){
    return(
        <div className="Section BannerSection" id="Home">
            <div className="BannerHeading">
                <img src={IITBLogo  } alt="" />
                <h1>IIT BOMBAY</h1>
                <h2>SUSTAINABLE <br /> DEVELOPMENT <br /> GOALS <br /> REPORT <br /> <span>2023</span></h2>
            </div>
        </div>
    )
}

export default BannerSection