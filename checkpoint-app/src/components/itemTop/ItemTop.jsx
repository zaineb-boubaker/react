

import React from "react";
import "./style.css";
import PropTypes from "prop-types";

function ItemTop(props) {
  return (
    <div>



      <div id="section1">
        <h1 id="score"> {props.score} </h1>
        <h2 id="place"> {props.place} </h2>
        <img src={props.flag} alt="" width={40} id="flag" />
        <img src={props.team} alt="" width={44} id="team" />
        <img src={props.player} alt="" width={240} id="player" />
      
      
        <h1 id="name"> {props.name} </h1>
        <h3 id="prop1"> {props.prop1} </h3>
        <h3 id="prop2"> {props.prop2} </h3>
        <h3 id="prop3"> {props.prop3} </h3>
        <h3 id="prop4"> {props.prop4} </h3>
        <h3 id="prop5"> {props.prop5} </h3>
        <h3 id="prop6"> {props.prop6} </h3>
      </div>




    </div>
  );
}

ItemTop.propTypes = {
  score: PropTypes.string,
  place: PropTypes.string,
  flag: PropTypes.string,
  team: PropTypes.string,
  player: PropTypes.string,
  name: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  prop4: PropTypes.string,
  prop5: PropTypes.string,
  prop6: PropTypes.string,
};

ItemTop.defaultProps = {
  score: "91",
  place: "CAM",
  flag: "./images/brazil.png",
  team: "./images/barcelona.png",
  player: "./images/ronaldinho.png",
  name: "RONALDINHO",
  prop1: "87 PAC",
  prop2: "84 SHO",
  prop3: "90 PAS",
  prop4: "94 DRI",
  prop5: "50 DEF",
  prop6: "81 PHY",
};



export default ItemTop;
