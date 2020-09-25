import React from "react";
import "../Styles/AboutUs/main.css";
import Stands from '../Components/Stands'; 
export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us">
        <h1 className="about-us__header">من نحن؟</h1>
        <img className="about-us__img" src={require("../images/about-us.jpg")}/>
        <p className="about-us__paragraph">
          More than 100 years have gone by since the Mercado de San Miguel
          opened its doors as a wholesale food market. Today, this historical
          building stands out as one of the world’s main gastronomic markets. It
          allows visitors to experience the essence and most significant flavors
          of every corner of Spain.
        </p>
        <p className="about-us__paragraph">
          From the finest Iberian ham and freshest fish and shellfish brought in
          daily from Galicia, to Mediterranean rice dishes and the most
          exquisite cheeses from Castile, Asturias and the Basque Country – at
          the Mercado de San Miguel, you’ll find all the highlights of Spanish
          cuisine. Spread out over more than 20 stands, the common denominator
          here is a commitment to high-quality tapas and pub fare.
        </p>
        <Stands/>
      </div>
    );
  }
}
