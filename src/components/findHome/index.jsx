import React from "react";
import "./findHomeStyles.css";
import Boxes from "../../components/boxes";
import lekki from "../../assets/lekki.svg";
import agege from "../../assets/agege.svg";
import obalende from "../../assets/obalende.svg";
import gbagada from "../../assets/gbagada.svg";
import yaba from "../../assets/yaba.svg";

const FindHome = () => {
  return (
    <section className="find_home_container">
      <section className="find_home_wrapper">
        <div className=" popular">
          <h1>Find homes in popular neighbourhooods</h1>
          <address>Apartments in Lekki, Obalende, Agege & Yaba </address>
        </div>
        <section className="container">
          <div className="boxes_parent_container">
            {/* Boxes  */}

            <div className="first_box_div">
              <Boxes image={lekki} />
              <section className="lekki" > 
               <h3 className="prop">8 properties</h3> 
                <h2 className="oba">Lekki</h2>
              </section>
            </div>
            <div className="second_boxes_div">
              <Boxes image={agege}  />
              <section className="agege" > 
               <h3 className="prop">2 properties</h3> 
                <h2 className="oba">Agege</h2>
              </section>              
              <Boxes image={obalende}/>
              <section className="obalende" > 
               <h3 className="prop">11 properties</h3> 
                <h2 className="oba">Obalende</h2>
              </section>
            </div>
            <div className="third_boxes_div">
              <Boxes image={gbagada} />
              <section className="gbagada" > 
               <h3 className="prop">45 properties</h3> 
                <h2 className="oba">Gbagada</h2>
              </section>
              <Boxes image={yaba} />
              <section className="yaba" > 
               <h3 className="prop">12 properties</h3> 
                <h2 className="oba">yaba</h2>
              </section>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default FindHome;