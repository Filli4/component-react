
import { FaBeer } from "react-icons/fa";
import { AiFillAliwangwang, AiFillAccountBook } from "react-icons/ai";

import cardImg1 from "./assets/card-images/img1.png";
import cardImg2 from "./assets/card-images/img2.jpg";
import cardImg3 from "./assets/card-images/img3.jpg";
import cardImgAlt from "./assets/card-images/imgAlt.jpg";

function CustomBtn({ color, children }) {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}

function CustomAlert({ color, icon }) {
  return (
    <div className="alert" style={{ backgroundColor: color }}>
      <img src={icon} alt="Alert Icon" className="alert-icon" />
      <div className="alert-message">Alert Message</div>
    </div>
  );
}

function CustomBadge({ color, children }) {
  return <div className="badge" style={{ backgroundColor: color }}>{children} Badge</div>;
}

function CustomCard({ href, imgSrc, imgAlt, children }) {
  return (
    <a href={href} className="card">
      <img src={imgSrc} alt={imgAlt} className="card-img" />
      {children}
    </a>
  );
}

function CustomCardContent() {
  return (
    <div className="card-content">
      <h2>Jujutsu <i>Kaisen</i> </h2>
      <p>
        I`am a <i>curse </i> sorcerer 
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Custom React Components</h1>
      <div className="container">
        <div className="section">
          <h2>Buttons</h2>
          <div className="btn-container">
            <CustomBtn color="red">Button</CustomBtn>
            <CustomBtn color="green">Button</CustomBtn>
            <CustomBtn color="blue">Button</CustomBtn>
          </div>
        </div>

        <div className="section">
          <h2>Alerts</h2>
          <div className="alerts-container">
            <CustomAlert color="red" icon="/src/assets/alert-icons/alert-icon1.png" />
            <CustomAlert color="yellow" icon="/src/assets/alert-icons/alert-icon2.png" />
            
          </div>
        </div>

        <div className="section">
          <h2>Badges</h2>
          <div className="badges-container">
            <CustomBadge color="red">
              <FaBeer size="30px" />
            </CustomBadge>
            <CustomBadge color="lightblue">
              <AiFillAliwangwang size="30px" />
            </CustomBadge>
            
          </div>
        </div>

        <div className="section">
          <h2>Cards</h2>
          <div className="cards-container">
            <CustomCard href="#" imgSrc={cardImg1} imgAlt={cardImgAlt}>
              <CustomCardContent />
            </CustomCard>
            <CustomCard href="#" imgSrc={cardImg2} imgAlt={cardImgAlt}>
              <CustomCardContent />
            </CustomCard>
            <CustomCard href="#" imgSrc={cardImg3} imgAlt={cardImgAlt}>
              <CustomCardContent />
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
