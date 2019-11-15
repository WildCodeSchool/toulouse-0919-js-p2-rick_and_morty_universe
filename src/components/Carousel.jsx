import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import lucie from '../imageaccueil/lucie_rm.png';
import ismael from '../imageaccueil/ismael_rm.png';
import aina from '../imageaccueil/aina_rm.png';
import damien from '../imageaccueil/damien_rm.png';

function CarouselPhoto({ onChangeCarousel }) {

  return (
    <Carousel
      className="carousel-container"
      autoPlay
      infiniteLoop
      onChange={(index) => onChangeCarousel(index)}
      interval={1500}
      showStatus={false}
      showThumbs={false}>
      <div>
        <img alt="avatar of Lucie" src={lucie} />
        <p className="legend">Lucie</p>
      </div>
      <div>
        <img alt="avatar of Aina" src={aina} />
        <p className="legend">Aina</p>
      </div>
      <div>
        <img alt="avatar of Ismael" src={ismael} />
        <p className="legend">Ismael</p>
      </div>
      <div>
        <img alt="avatar of Damien" src={damien} />
        <p className="legend">Damien</p>
      </div>
    </Carousel>
  )
};

export default CarouselPhoto;