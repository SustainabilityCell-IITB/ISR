import './SideNav.css'

function SideNav(){
    return(<>
        <div className = "SideNav">
            <div className='hamburger-button'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <a href="#Home">Home</a>
            <a href="#IntroSection">About</a>
            <a href="#Section1">1: Social Equality and Empowerment </a>
            <a href="#Section2">2: Access to Basic Needs</a>
            <a href="#Section3">3: Sustainable Living</a>
            <a href="#Section4">4: Sustainable Growth</a>
            <a href="#Section5">5: Holistic Environmental Protection</a>
            <a href="#Section6">6: Governance and Global Partnerships</a>
        </div>
        <div className="SideNavFiller">
            
        </div>
        </>
    )
}

export default SideNav;