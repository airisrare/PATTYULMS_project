import React from "react";
import logo from "../images/PATTYULMS.jpg"
import '../pages/page.css';

class EmblemLogo extends React.Component {

     render() {
    return (
      <p>
        <img src={logo} alt="" height={300}></img>
      </p>
    );
  }
}

export default EmblemLogo;


