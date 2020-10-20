import React from 'react';
import './css/Gallery.css';

// Function Components
import { ImageSlide as Slide } from './ImageSlide';

// Import images
import images from './images/_images';

let imgArr: Array<any> = []; 

for (let i=0; i < images.length; i++) {
    imgArr.push(<Slide key={i} url={images[i]} />)
}

export const Gallery: React.FC = () => (
    <section id="Gallery" className="page">
        <div className="content">
            <h1>Gallery</h1>
            <div className="carousel">
                <div className="slide-container">
                    {imgArr}
                </div>
            </div>
        </div>
    </section>
);