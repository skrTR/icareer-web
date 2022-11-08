import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const SectionTitle = ({
  subtitle,
  title,
  description,
  textAlign,
  radiusRounded,
}) => {
  return (
    <div className={`section-title ${textAlign}`}>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeInOut"
        animateOnce={true}
      >
        <h2
          className="title w-600 mb--20"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
      </ScrollAnimation>
    </div>
  );
};
export default SectionTitle;
