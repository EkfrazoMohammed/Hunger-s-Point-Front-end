import React from "react";
import { SubMenuPagesHeader } from "../../../components/SubMenuPagesHeader";
import sideImg from "../../../assets/image-5@2x.png";

export const Events = () => {
  return (
    <div className="fp-container-main container--events">
      <SubMenuPagesHeader />
      <section className="info_event fp-wrapper-main">
        <p className="fp-para-section-title">Events</p>
        <div className="sec-info--w info_event">
          <div className="side--w">
            <div className="para-container w-5/6">
              <p className="mt-4">
                Dolore ullamco mollit elit non ea pariatur mollit magna
                cupidatat labore sunt consequat elit. Est ad cupidatat velit
                anim aliquip in anim mollit. Excepteur incididunt ex sint labore
                velit ut aliquip ad magna exercitation qui dolor laborum. Veniam
                ad consectetur aliquip cupidatat aute sunt cupidatat ea.
                Pariatur pariatur qui esse cupidatat commodo ullamco ex. Nulla
                officia veniam ex culpa officia ad ex dolor nostrud in. Ullamco
                labore nulla proident nisi. Cupidatat sit aute esse id.
              </p>

              <p className="mt-4">
                Nulla quis qui duis amet sunt. Nisi mollit ad sint exercitation
                anim veniam enim laboris id ad adipisicing laboris aliqua.
                Veniam commodo reprehenderit mollit cupidatat minim officia
                voluptate dolor minim proident et magna dolore. Ea proident sit
                laborum amet amet veniam. Labore Lorem et quis fugiat sint
                fugiat. Enim ad proident nisi ipsum nostrud duis.
              </p>
            </div>
          </div>
          <div className="side--w">
            <img src={sideImg} alt="..." />
          </div>
        </div>
      </section>
      <section className="fp-wrapper-main ">
        <div className="sec-info--w gap-6 justify-between">
          <div className="side--w">
            <div className="para-container">
            <img src={sideImg} alt="..." />
            </div>
          </div>
          <div className="side--w">
            <img src={sideImg} alt="..." />
          </div>
        </div>
      </section>
      <section className="fp-wrapper-main ">
        <div className="sec-info--w gap-6 justify-between">
          <div className="side--w">
            <div className="para-container">
            <div className="fp-para-section-title-sm w-2/3">Fill us a simple form to get in souch</div>
            <div className="fp-para-section-title w-2/3">Fill us a simple form to get in souch</div>
            </div>
          </div>
          <div className="side--w">
          </div>
        </div>
      </section>
    </div>
  );
};
