import React from "react";
import CardListItem from "../CardListItem/CardListItem";

const BaseCard = ({ data, title }) => {
  const items = data.map((item) => (
    <CardListItem key={item.number} item={item} />
  ));

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-header">{title}</h5>
        <ul className="list-group list-group-flush">{items}</ul>
      </div>
    </div>
  );
};

export default BaseCard;
