import React, { useState } from "react";

const Search = ({ getquery }) => {
  const [search, setsearch] = useState("");
  const onChange = (q) => {
    setsearch(q);
    getquery(q);
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters..."
          autoFocus
          value={search}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
