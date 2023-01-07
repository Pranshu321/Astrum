import React from "react";

const SpotLocation = (props) => {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28.6775805%20,%2077.2913174+(Hotspot)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure area map
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default SpotLocation;
