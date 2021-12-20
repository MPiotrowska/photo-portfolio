import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

export const Grid = ({ images }) => {
  return (
    <article className="test yannis">
      <Carousel views={images} />
    </article>
  );
};

export const Gallery = ({ images }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);

  if (!images) return;

  const toggleModal = (e, i) => {
    setCurrentImage(i);
    setLightboxIsOpen((prevState) => !prevState);
  };

  const gallery = images.map((obj, i) => {
    return (
      <article className="thumb" key={obj.source}>
        <span
          style={{
            backgroundImage: `url(${obj.source})`,
            cursor: 'pointer',
            outline: '0px',
          }}
          onClick={(e) => toggleModal(e, i)}
          className="image"
        >
          <img
            style={{ display: 'None' }}
            src={obj.source}
            alt=""
            title={obj.title}
          />
        </span>
        <h2>{obj.title}</h2>
        <p>{obj.desc}</p>
      </article>
    );
  });

  return (
    <>
      {gallery}
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={toggleModal}>
            <Carousel currentIndex={currentImage} views={images} />
          </Modal>
        ) : (
          <></>
        )}
      </ModalGateway>
    </>
  );
};
