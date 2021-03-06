import React from "react";

// Load SVGs with Webpack svg-react-loader
import Sdg1 from "!babel!svg-react!../../images/sdg1.svg";
import Sdg2 from "!babel!svg-react!../../images/sdg2.svg";
import Sdg3 from "!babel!svg-react!../../images/sdg3.svg";
import Sdg4 from "!babel!svg-react!../../images/sdg4.svg";
import Sdg5 from "!babel!svg-react!../../images/sdg5.svg";
import Sdg6 from "!babel!svg-react!../../images/sdg6.svg";
import Sdg7 from "!babel!svg-react!../../images/sdg7.svg";
import Sdg8 from "!babel!svg-react!../../images/sdg8.svg";
import Sdg9 from "!babel!svg-react!../../images/sdg9.svg";
import Sdg10 from "!babel!svg-react!../../images/sdg10.svg";
import Sdg11 from "!babel!svg-react!../../images/sdg11.svg";
import Sdg12 from "!babel!svg-react!../../images/sdg12.svg";
import Sdg13 from "!babel!svg-react!../../images/sdg13.svg";
import Sdg14 from "!babel!svg-react!../../images/sdg14.svg";
import Sdg15 from "!babel!svg-react!../../images/sdg15.svg";
import Sdg16 from "!babel!svg-react!../../images/sdg16.svg";
import Sdg17 from "!babel!svg-react!../../images/sdg17.svg";
import Sdg0 from "!babel!svg-react!../../images/sdg0.svg";

const sdgs = [Sdg0, Sdg1, Sdg2, Sdg3, Sdg4, Sdg5, Sdg6, Sdg7, Sdg8,
	Sdg9, Sdg10, Sdg11, Sdg12, Sdg13, Sdg14, Sdg15, Sdg16, Sdg17];

// Creates new React Elements from imported SVGs
export const icons = sdgs.map( (svg, i) => React.createElement(svg, {
	className: "sdg"+ i
}));
