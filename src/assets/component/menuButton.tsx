import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function MenuButton() {
  const [sidePanelWidth, setSidePanelWidth] = useState("0px");

  const openSideNav = () => {
    setSidePanelWidth("100vw");
  };

  const closeSideNav = () => {
    setSidePanelWidth("0px");
  };

  const location = useLocation();
  return (
    <div>
      <span className="openbtn" onClick={openSideNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 -960 960 960"
          width="50px"
          fill="#0101010">
          <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" />
        </svg>
      </span>
      <div
        id="mySidepanel"
        className="sidepanel"
        style={{ width: sidePanelWidth }}>
        <a href="#" className="closebtn" onClick={closeSideNav}>
          &times;
        </a>

        <div className="overlay-content">
          <Link
            className="menulink"
            to="/about"
            state={{ previousLocation: location }}
            onClick={closeSideNav}>
            About
          </Link>

          <HashLink
            className="menulink"
            to="/projects/#skillsandtools"
            state={{ previousLocation: location }}
            onClick={closeSideNav}>
            Skills/Tools
          </HashLink>

          <HashLink
            className="menulink"
            to="/projects/#portfolio"
            state={{ previousLocation: location }}
            onClick={closeSideNav}>
            Projects
          </HashLink>

          <HashLink
            className="menulink"
            to="/about/#contact"
            onClick={closeSideNav}
            state={{ previousLocation: location }}>
            Contact
          </HashLink>

          <HashLink
            className="menulink"
            to="/about/#videos"
            onClick={closeSideNav}
            state={{ previousLocation: location }}>
            Videos
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default MenuButton;
