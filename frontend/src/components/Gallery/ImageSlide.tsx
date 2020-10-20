import React from 'react';
import './css/ImageSlide.css';

export type Slide = {
    url: string
}

export const ImageSlide: React.FC<Slide> = (props) => (
    <div className="slide"><img src={props.url} alt=""/></div>
)