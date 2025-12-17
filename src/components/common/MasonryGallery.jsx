// MasonryGallery.jsx
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import GalleryItem from "../Gallery/GalleryItem";
import "../Gallery/Gallery.css";

const MasonryGallery = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (id) => setLoadedImages((prev) => [...prev, id]);

  return (
    <div className="masonry-grid">
      {items.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          onClick={setActiveItem}
          loadedImages={loadedImages}
          handleImageLoad={handleImageLoad}
        />
      ))}

      <Modal
        show={!!activeItem}
        onHide={() => setActiveItem(null)} // required for all close actions
        centered
        size="xl" // fullscreen-like on large screens
        backdrop={true} // click outside to close
        keyboard={true} // ESC key to close
        className="gallery-modal"
      >
        {activeItem && (
          <>
            {/* Optional: Header with close button */}
            <Modal.Header closeButton className="border-0">
              <Modal.Title>{activeItem.description}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="p-0">
              <img
                src={activeItem.image}
                alt={activeItem.description}
                className="img-fluid w-100"
              />
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MasonryGallery;
