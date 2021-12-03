import React from "react";
import spinner from "../img/spinner.gif";
import CharItem from "./CharItem";

const CharacterGrid = ({ isLoading, item }) => {
  return isLoading ? (
    <section className="center">
      <img src={spinner} alt="" />
    </section>
  ) : (
    <section className="cards">
      {item.map((item) => {
        return <CharItem item={item} key={item.char_id} />;
      })}
    </section>
  );
};
export default CharacterGrid;
