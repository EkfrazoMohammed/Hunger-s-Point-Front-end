import "./ChildFrame.css";

const ChildFrame = () => {
  return (
    <section className="child-frame1">
      <div className="addons-container">
        <div className="divider28" />
      </div>
      <form className="addons-parent">
        <div className="addons">Addons</div>
        <div className="dry-fruits-parent">
          <b className="dry-fruits">Dry Fruits</b>
          <div className="addons-addons-parent">
            <div className="addons-addons">
              <button className="addons1">
                <div className="almonds-parent">
                  <div className="almonds">Almonds</div>
                  <div className="almonds-almonds">$1.00</div>
                </div>
              </button>
              <div className="addons2">
                <div className="almonds-group">
                  <div className="almonds1">Cashew</div>
                  <input
                    className="almonds-almonds1"
                    placeholder="$1.00"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="addons-addons1">
              <div className="addons3">
                <div className="almonds-container">
                  <div className="almonds2">Nuts</div>
                  <input className="input11" placeholder="$1.00" type="text" />
                </div>
              </div>
              <div className="addons4">
                <div className="almonds-parent1">
                  <div className="almonds3">Almonds</div>
                  <input className="input12" placeholder="$1.00" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fudges-parent">
          <b className="fudges">Fudges</b>
          <div className="frame-wrapper4">
            <div className="addons-group">
              <div className="addons5">
                <div className="items-added1">
                  <div className="almonds4">Almonds</div>
                  <input className="input13" placeholder="$1.00" type="text" />
                </div>
              </div>
              <button className="addons6">
                <div className="almonds-parent2">
                  <div className="almonds5">Almonds</div>
                  <div className="div35">$1.00</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ChildFrame;
