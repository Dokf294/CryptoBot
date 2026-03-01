import layoutHtml from "./html/main.html?raw";

import "./components/settings.css";
import "./components/base.css";
import "./components/header.scss";  

document.querySelector("#layout").innerHTML = layoutHtml;


setupCounter(document.querySelector('#counter'))
