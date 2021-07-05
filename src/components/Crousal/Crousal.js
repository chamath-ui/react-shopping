import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Laptop from './../../images/laptop.jpg'
import Laptop1 from './../../images/laptop4.jpg'
import Laptop2 from './../../images/laptop3.jpg'
import './Crousal.css'

const ControlledCarousel = () =>{
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
          <Carousel activeIndex={index} onSelect={handleSelect} className='crousal'>
            <Carousel.Item>
              <img
                className="d-block  crousal-image"
                src={Laptop}
                alt="First slide"
              
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  crousal-image"
                src={Laptop1}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  crousal-image"
                src={Laptop2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
  );
}

export default ControlledCarousel