import React from "react";
import "./CardListItem.css";

const CardListItem = ({ item }) => {
  return (
    <li className="list-group-item">
      <div className="row g-0">
        <div className="col-3 container-center">
          <img
            src={item.image}
            className={`img-fluid ${item.classCSS}`}
            alt={item.name}
          />
        </div>
        <div className="col-9">
          <div className="card-body">
            <h6 className="card-title">{item.name}</h6>
            <p className="card-text">
              <small className="text-muted">{item.level}</small>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardListItem;
