import "./Locationhospitalframe.css";
import location1 from  "../assets/location-1.svg";
import call from  "../assets/call.svg";
import time from  "../assets/time.svg";
const Locationhospitalframe = () => {
  return (
    <div className="locationhospitalframe">
      <div className="location-parent3">
        <img
          className="location-icon8"
          loading="eager"
          alt=""
          src={location1}
        />
        <div className="hospital-st-fort5">
          1 Hospital St, Fort McMurrayState, Alberta, T9H 5C1
        </div>
      </div>
      <div className="call-parent2">
        <img className="call-icon5" loading="eager" alt="" src={call} />
        <div className="div15">(248) 676 7890</div>
      </div>
      <div className="ampmtext">
        <img className="time-icon" loading="eager" alt="" src={time} />
        <div className="allframesframe">
          <div className="northindiandishesframe">
            <div className="mon-fri">{`Mon - Fri `}</div>
            <div className="am-9pm">10am - 9pm</div>
          </div>
          <div className="beveragesframe">
            <div className="desertsframe">
              <div className="sat-sun">{`Sat - Sun `}</div>
            </div>
            <div className="am-11pm">10am - 11pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locationhospitalframe;
