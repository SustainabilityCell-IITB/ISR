import IntroImg1 from "../assets/images/IntroImg1.jpg";
import "./IntroSection.css"

function IntroSection(){
    return(
        <div className="IntroSection Section">
            <div className="intro-grid-container">
                <p></p>
                <div className="IntroImg">
                <img src={IntroImg1} alt="" />
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default IntroSection