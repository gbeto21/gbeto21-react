import React from "react";
import CardListItem from "../CardListItem/CardListItem";

const BaseCard = ({ data, title, sizeColImage, sizeColBody }) => {
  const items = data.map((item) => (
    <CardListItem
      key={item.number}
      item={item}
      sizeColImage={sizeColImage}
      sizeColBody={sizeColBody}
    />
  ));

  return (
    <div className="card">
      <div className="card-body">
        <h5
          className="card-header"
          style={{ color: "var(--primary-blue-light)", fontWeight: "500" }}
        >
          {title}
        </h5>
        <ul className="list-group list-group-flush">{items}</ul>
      </div>
    </div>
  );
};

export default BaseCard;
