import React from "react";

const CardListItem = ({ item }) => {
  return (
    <li className="list-group-item">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid" alt={item.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
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
