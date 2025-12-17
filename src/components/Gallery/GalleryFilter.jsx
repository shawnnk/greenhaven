import React from "react";

const GalleryFilter = ({ categories, active, onSelect }) => {
  return (
    <div className="d-flex justify-content-center mb-4 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${active === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
