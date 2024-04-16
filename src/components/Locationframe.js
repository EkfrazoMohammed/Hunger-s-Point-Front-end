import Shipping from "./Shipping";
import ContactInformation1 from "./ContactInformation1";
import "./Locationframe.css";

const Locationframe = () => {
  return (
    <div className="locationframe">
      <Shipping />
      <ContactInformation1
        contactInformation="Contact Information"
        propAlignSelf="unset"
        propWidth="748px"
        propMinWidth="114px"
      />
      <ContactInformation1
        contactInformation="Payment"
        propAlignSelf="unset"
        propWidth="748px"
        propMinWidth="50px"
      />
    </div>
  );
};

export default Locationframe;
