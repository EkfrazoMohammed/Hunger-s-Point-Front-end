import Property1FilledPrimary from "./Property1FilledPrimary";
import "./MapPinSection.css";
import ellipse4 from  "../assets/ellipse-4.svg";

import customerservicemanansweringquestion from  "../assets/customer-service-man-answering-question@2x.png";
import uiwdown from  "../assets/uiwdown.svg";
import FeedbackForm from "./FeedbackForm/feedbackform";


const FrameComponent1 = () => {
  return (
    <section className="map-pin-section">
      <div className="heading2">
        <div className="what-we-believe-text">
          <h1 className="what-we-believe2 fp-para-section-title bottom-a-line">Give us your review</h1>
        </div>
      </div>
      <div className="give-your-feedback-below-parent">
        <div className="give-your-feedback-below">
          <img
            className="give-your-feedback-below-child"
            alt=""
            src={ellipse4}
          />
          <img
            className="customer-service-man-answering"
            loading="eager"
            alt=""
        
            src={customerservicemanansweringquestion}
          />
        </div>
        <div style={{width:'50%'}}>
        <FeedbackForm />
        </div>
       
      </div>
      <div className="feedback-forms-parent">
        <div className="feedback-forms">
          <div className="map-pin-group" />
          <div className="image-frame" />
          <div className="ellipse-group1" />
        </div>
        <div className="feedback-forms1">
          <div className="feedback-forms-child" />
          <div className="feedback-forms-item" />
          <div className="feedback-forms-inner" />
          <div className="ellipse-div" />
          <div className="feedback-forms-child1" />
        </div>
        <div className="feedback-forms2">
          <div className="feedback-forms-child2" />
          <div className="feedback-forms-child3" />
          <div className="feedback-forms-child4" />
          <div className="feedback-forms-child5" />
          <div className="feedback-forms-child6" />
        </div>
        <div className="feedback-forms3">
          <div className="feedback-forms-child7" />
          <div className="feedback-forms-child8" />
          <div className="feedback-forms-child9" />
          <div className="feedback-forms-child10" />
          <div className="feedback-forms-child11" />
        </div>
        <div className="feedback-forms4">
          <div className="feedback-forms-child12" />
          <div className="feedback-forms-child13" />
          <div className="feedback-forms-child14" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
