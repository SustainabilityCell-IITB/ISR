import "../Sections/DownloadSection.css";

function DownloadSection() {
  return (
    <div className="DownloadSection" id="DownloadSection">
      <div className="Contacts-Container subsection">
        <h4>Contact Details</h4>
        <div className="Contacts">
          <div className="Contact-Details">
            <p className="Position">Head</p>
            <p className="Name">Himank Gupta</p>
            <a href="tel:+91 9886771001" className="Contact-number">+91 9886771001</a>
          </div>
          <div className="Contact-Details">
            <p className="Position">Head</p>
            <p className="Name">Harshvardhan Jakher</p>
            <a href="tel:+91 9929203844" className="Contact-number">+91 9929203844</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="Download-Container subsection">
        <a href="/ISR/src/assets/ISR-Booklet-PDF.pdf" target="_blank" >Download the Booklet</a>
      </div>
    </div>
  );
}

export default DownloadSection;
