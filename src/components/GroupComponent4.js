/* eslint-disable react/jsx-no-target-blank */
import { useCallback } from "react";
import "./GroupComponent4.css";
import { FaStar } from "react-icons/fa";

const GroupComponent4 = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://linear.app/mobile");
  }, []);

  return (
    <div className="rectangle-parent11">
      <div className="background3">
        {/* <img
          className="image-icon12"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <img className="image-icon13" alt="" src="/image-1@2x.png" /> */}
        <div className="margin">
          <div className="container7">
            <div className="container8">
              <div className="container9">
                <div className="link17" onClick={onLinkContainerClick}>
                  <div className="container10">
                    <a
                      className="linear-mobile-v01"
                      href="https://linear.app/mobile"
                      target="_blank"
                    >
                      Linear Mobile v0.1
                    </a>
                  </div>
                  <div className="imgmargin">
                    <div className="img">
                      <img className="frame-icon" alt="" src="/frame.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-1margin">
                <div className="heading-1">
                  <div className="linear-is-a-container">
                    <span>
                      <p className="linear-is-a">Linear is a better way</p>
                      <p className="to-build-products">to build products</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="margin1">
                <div className="container11">
                  <div className="meet-the-new-container">
                    <span>
                      <p className="meet-the-new">
                        Meet the new standard for modern software development.
                      </p>
                      <p className="streamline-issues-sprints">
                        Streamline issues, sprints, and product roadmaps.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <img className="container-icon8" alt="" src="/container@2x.png" />
        </div>
        <div className="active-customers">
          <div className="active-customers-wrapper">
            <b className="active-customers1">700+ Active Customers</b>
          </div>
          <b className="product-hunt">PRODUCT HUNT</b>
          <div className="vector-group">
            <img className="vector-icon6" alt="" src="/vector-1.svg" />
            <img className="group-icon1" alt="" src="/group.svg" />
          </div>
        </div>
        <div className="were-crafting-digital-container">
          <span className="were-crafting-digital-container1">
            <p className="were">We’re</p>
            <p className="crafting-digital-dreams">Crafting Digital Dreams</p>
          </span>
        </div>
       
        <div className="design-by-india"> #Design by India</div>
        <img className="background-child" alt="" src="/group-1707478662.svg" />
        <div style={{marginTop:"10%"}}>
          <img
            className="customers-images-icon"
            alt=""
            src="/customers-images.svg"
          />
          <img
            className="customers-images-icon1"
            alt=""
            src="/customers-images1.svg"
          />
          <img
            className="google-logosvg-icon"
            loading="lazy"
            alt=""
            src="/googlelogosvg@2x.png"
          />
          <b className="customers-images">4.9</b>
          <div className="symbol">
            <FaStar />
          </div>
          <div className="symbol1">
            <FaStar />
          </div>
          <div className="symbol2">
            <FaStar />
          </div>
          <div className="symbol3">
            <FaStar />
          </div>
          <div className="symbol4">
            <FaStar />
          </div>
          <img
            className="clutch-logosvg-icon"
            loading="lazy"
            alt=""
            src="/clutchlogosvg.svg"
          />
          <b className="customers-images1">4.9</b>
          <div className="symbol5">
            <FaStar />
          </div>
          <div className="symbol6">
            <FaStar />
          </div>
          <div className="symbol7">
            <FaStar />
          </div>
          <div className="symbol8">
            <FaStar />
          </div>
          <div className="symbol9">
            <FaStar />
          </div>
          <b className="customers-images2">4.9</b>
          <div className="symbol10">
            <FaStar />
          </div>
          <div className="symbol11">
            <FaStar />
          </div>
          <div className="symbol12">
            <FaStar />
          </div>
          <div className="symbol13">
            <FaStar />
          </div>
          <div className="symbol14">
            <FaStar />
          </div>
          <div className="image-103954-parent">
            <img
              className="image-103954-icon"
              alt=""
              src="/image-103954@2x.png"
            />
            <img
              className="image-103955-icon"
              alt=""
              src="/image-103955@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
