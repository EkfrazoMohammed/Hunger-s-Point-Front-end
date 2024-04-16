import "./Header31.css";
import icon2 from  "../assets/4@2x.png";
import icon3 from  "../assets/1@2x.png";
import icon4 from  "../assets/2@2x.png";
import icon5 from  "../assets/3@2x.png";



const Header3 = () => {
  return (
    <div className="header8">
      <div className="b-e-c-o-m-e-a-v-i-p-frame">
        <div className="lorem-ipsum-dolor-container2">
          <p className="lorem-ipsum-dolor3">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="ante-eget-vel4">{`Ante eget vel dis Lorem ipsum dolor `}</p>
          <p className="ante-eget-vel5">Ante eget vel dis</p>
        </div>
        <div className="v-i-p-members-recap">
          <button className="buttons-states-dark66">
            <div className="button78">Order Online Now!</div>
          </button>
        </div>
      </div>
      <div className="animation1">
        <div className="parent">
          <img className="icon2" alt="" src={icon2} />
          <div className="wrapper-category-title">
            <img className="category-title-icon" alt="" src={icon3} />
          </div>
          <img className="icon3" alt="" src={icon4} />
          <img className="icon4" loading="eager" alt="" src={icon5} />
        </div>
        <div className="our-delivery-partners4" />
      </div>
    </div>
  );
};

export default Header3;
