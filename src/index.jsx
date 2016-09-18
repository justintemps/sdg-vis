import React from "react";
import {render} from "react-dom";

import "./styles/main.scss";
import "./fonts/fonts.scss";
import "./fonts/font-awesome-4.6.3/scss/font-awesome.scss";

import SDGexplorer from "./Components/SDGexplorer/SDGexplorer.jsx";
import Header from "./Components/Header/Header.jsx";
import PageTitle from "./Components/PageTitle/PageTitle.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";

render(<Header/>, document.getElementById("header"));
render(<PageTitle/>, document.getElementById("title"));
render(<Sidebar/>, document.getElementById("sidebar"));
render(<SDGexplorer />, document.getElementById("app"));
