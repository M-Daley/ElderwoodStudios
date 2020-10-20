import React from 'react';
import './css/Home.css';

import WelcomeBanner from './WelcomeBanner'

// Assets
import PolygonDesignImg from './images/polygonal-human-face-3d-illustration.webp';
import AnimationBreakDownImg from './images/animator-designer-development-designing-drawing.webp';
import TabletImg from './images/animator-designer-creative-process-art.jpg';
import ceoImg from './images/ceo-business-man-character-vector.webp';

const welcomeMessage = "Hi! I'm Joseph a 2d Animator and 3d Rigger."

export const Home: React.FC = () => (
    <section id="Home" className="home-page">
        <article className="home-container">
            <div className="img-top-left">
                <img src={PolygonDesignImg} alt="3D Rigging" />
            </div>
            <div className="welcome-container">
                <WelcomeBanner title={welcomeMessage} />
            </div>
            <div className="img-bottom-left">
                <img src={AnimationBreakDownImg} alt="13 principles of animation" />
            </div>
            <div className="img-bottom-middle">
                <img src={ceoImg} alt="custom character templating example" />
            </div>
            <div className="img-bottom-right">
                <img src={TabletImg} alt="Drawing on a Tablet" />
            </div>
        </article>
    </section>
);