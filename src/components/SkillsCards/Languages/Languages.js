import React from "react";
import "../SkillsCards.css";
import CardListItem from "../CardListItem/CardListItem";
import languages from "./languajesData.json";

const CardLanguages = () => {
  const languajesItems = languages.data.map((languaje) => (
    <CardListItem key={languaje.number} item={languaje} />
  ));

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-header">Languages</h5>
        {/* <h5 className="card-title">Languages</h5> */}
        <ul className="list-group list-group-flush">{languajesItems}</ul>
      </div>
    </div>
  );
};

export default CardLanguages;
