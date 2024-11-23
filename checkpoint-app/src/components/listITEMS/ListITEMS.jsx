import React from "react";
import "./style.css";
import ItemTop from "../itemTop/ItemTop";
function ListITEMS() {
  const data = [
    {
      score: "90",
      place: "CB",
      flag: "./images/netherlands.png",
      team: "./images/liverpool.png",
      player: "./images/van.png",
      name: "VAN DIJK",
      prop1: "77 PAC",
      prop2: "60 SHO",
      prop3: "70 PAS",
      prop4: "72 DRI",
      prop5: "90 DEF",
      prop6: "86 PHY",
    },
    {
      score: "90",
      place: "RW",
      flag: "./images/egypt.png",
      team: "./images/liverpool.png",
      player: "./images/salah.png",
      name: "SALAH",
      prop1: "93 PAC",
      prop2: "86 SHO",
      prop3: "81 PAS",
      prop4: "89 DRI",
      prop5: "45 DEF",
      prop6: "74 PHY",
    },
    {
      score: "89",
      place: "ST",
      flag: "./images/france.png",
      team: "./images/paris-saint-germain.png",
      player: "./images/mbape.png",
      name: "MBAPPE",
      prop1: "96 PAC",
      prop2: "84 SHO",
      prop3: "78 PAS",
      prop4: "90 DRI",
      prop5: "39 DEF",
      prop6: "75 PHY",
    },
    {
      score: "88",
      place: "JK",
      flag: "./images/brazil.png",
      team: "./images/manchester-city.png",
      player: "./images/ederson.png",
      name: "EDERSON",
      prop1: "86 PAC",
      prop2: "82 SHO",
      prop3: "93 PAS",
      prop4: "88 DRI",
      prop5: "64 DEF",
      prop6: "86 PHY",
    },
    {
      score: "89",
      place: "LM",
      flag: "./images/senegal1.png",
      team: "./images/bayern-munchen.png",
      player: "./images/player.png",
      name: "MANE",
      prop1: "90 PAC",
      prop2: "83 SHO",
      prop3: "80 PAS",
      prop4: "88 DRI",
      prop5: "74 DEF",
      prop6: "77 PHY",
    },
    {
      score: "91",
      place: "ST",
      flag: "./images/flag.png",
      team: "./images/manchester-united.png",
      player: "./images/cristiano.png",
      name: "RONALDO",
      prop1: "87 PAC",
      prop2: "93 SHO",
      prop3: "82 PAS",
      prop4: "88 DRI",
      prop5: "34 DEF",
      prop6: "75 PHY",
    },
  ];



return (
  <div>
    <section id="secitems">
      {data.map((player, i) => (
        <ItemTop
          key={i}
          {...player}
        /> 
      ))}
    </section>
  </div>
);
}

export default ListITEMS;


