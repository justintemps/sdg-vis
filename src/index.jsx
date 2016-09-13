import React from "react";
import {render} from "react-dom";

import "./fonts/fonts.scss";
import "./styles/main.scss";

import SDGexplorer from "./Components/SDGexplorer/SDGexplorer.jsx";
import Header from "./Components/Header/Header.jsx";
import PageTitle from "./Components/PageTitle/PageTitle.jsx";

render(<Header/>, document.getElementById("header"));
render(<PageTitle/>, document.getElementById("title"));
render(<SDGexplorer />, document.getElementById("app"));
