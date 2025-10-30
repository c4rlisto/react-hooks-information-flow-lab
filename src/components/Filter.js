import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  function handleChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div className="Filter">
      <select
        name="filter"
        value={selectedCategory}        // make it controlled
        onChange={handleChange}         // call handler
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  );
}

export default Filter;
