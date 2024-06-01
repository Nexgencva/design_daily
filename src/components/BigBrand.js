import "./BigBrand.css";
import ScrollCarousel from "scroll-carousel-react";
const BigBrand = () => {
  return (
    <div className="big-brand">
      <div className="big-brand-experience-to-help-s-wrapper">
        <div className="big-brand-experience">
          Big Brand Experience to Help startups
        </div>
      </div>
      <div className="overlayshadow">
        <ScrollCarousel
          // smartSpeed={true}
          autoplay
          autoplaySpeed={80}
          speed={5}
        >
          <div className="image-102668-wrapper">
            <img
              className="image-102668-icon"
              alt=""
              src="/image-102668@2x.png"
            />
          </div>
          <div className="image-two">
            <img
              className="image-102669-icon"
              alt=""
              src="/image-102669@2x.png"
            />
          </div>
          <div className="image-four">
            <img
              className="image-102670-icon"
              loading="lazy"
              alt=""
              src="/image-102670@2x.png"
            />
          </div>
          <div className="image-103917-wrapper">
            <img
              className="image-103917-icon"
              loading="lazy"
              alt=""
              src="/image-103917@2x.png"
            />
          </div>
          <img
            className="rectangle-icon1"
            loading="lazy"
            alt=""
            src="/rectangle@2x.png"
          />
          <div className="image-six">
            <img
              className="image-102108-icon"
              alt=""
              src="/image-102108@2x.png"
            />
          </div>
          <div className="image-102455-wrapper">
            <img
              className="image-102455-icon"
              loading="lazy"
              alt=""
              src="/image-102455@2x.png"
            />
          </div>
          <div className="kyndryl-logo-3-wrapper">
            <img
              className="kyndryl-logo-3-icon"
              alt=""
              src="/kyndryl-logo-3@2x.png"
            />
          </div>
          <div className="image-103916-wrapper">
            <img
              className="image-103916-icon"
              loading="lazy"
              alt=""
              src="/image-103916@2x.png"
            />
          </div>
        </ScrollCarousel>
      </div>
    </div>
  );
};

export default BigBrand;
