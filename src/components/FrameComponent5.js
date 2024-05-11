import "./FrameComponent5.css";
import right1  from '../assets/right1.svg'
import { useNavigate } from "react-router-dom";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const OncardClick = () => {
    
    navigate(`/location`);
  };

  return (
    <div className="what-we-believe4 fp-para-section-title bottom-a-line mb-3">Our Location</div>
  );
};

export default FrameComponent5;
