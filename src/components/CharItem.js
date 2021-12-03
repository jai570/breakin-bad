import React from "react";

const CharItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="card-back">
          <h1> {item.name} </h1>
          <ul>
            <li>
              {" "}
              <strong>Actor Name : </strong> {item.name}{" "}
            </li>
            <li>
              {" "}
              <strong>Status : </strong> {item.status}{" "}
            </li>
            <li>
              {" "}
              <strong>Nickname : </strong> {item.nickname}{" "}
            </li>
            <li>
              {" "}
              <strong>Portrayed By : </strong> {item.portrayed}{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharItem;
