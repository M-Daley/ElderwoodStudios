import React from 'react';
import './css/Welcome.css';

type WelcomeMessgae = { title: string };

const WelcomeBanner: React.FC<WelcomeMessgae> = (props) => (
    <h1>{props.title}</h1>
);

export default WelcomeBanner;