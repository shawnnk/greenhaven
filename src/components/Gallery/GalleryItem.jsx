// GalleryItem.jsx
import React from "react";
import useReveal from "../../hooks/useReveal";
import "../gallery/Gallery.css";

const GalleryItem = ({ item, onClick, loadedImages, handleImageLoad }) => {
  const [ref, visible] = useReveal();
  const isLoaded = loadedImages.includes(item.id);

  return (
    <div
      ref={ref}
      className={`masonry-item fade-section ${visible ? "visible" : ""}`}
      onClick={() => onClick(item)}
    >
      {!isLoaded && <div className="skeleton"></div>}
      <img
        src={item.image}
        alt={item.description}
        loading="lazy"
        className={isLoaded ? "visible" : "hidden"}
        onLoad={() => handleImageLoad(item.id)}
      />
      <div className="overlay">{item.description}</div>
    </div>
  );
};

export default GalleryItem;
