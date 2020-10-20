import React, { useState } from 'react';
import './css/Commission.css';

import { CommissionForm } from './Components/CommissionForm';

const FormState = {
    RadioFields: {
        profile: false,
        waist: false,
        fullbody: false
    },
    CheckBox: {
        lineColor: false,
        shading: false,
        background: false
    }
}

// This will act as the backend logic
// Once the backend is properly connected
// remove this and its accompaning function.
const FormTranslater: any = {
    profile: 5,
    waist: 10,
    fullbody: 15,
    lineColor: 5,
    shading: 5,
    background: 5
}

function parseFormForPriceTotal(state: any): number {
    const radioFields = ["profile", "waist", "fullbody"];
    const checkboxFields = ["lineColor", "shading", "background"];
    let total = 0;

    for (let i=0; i < radioFields.length; i++) {
        if (state["RadioFields"][radioFields[i]]) {
            total += FormTranslater[radioFields[i]]
        }
    }

    for (let i=0; i < checkboxFields.length; i++) {
        if (state["CheckBox"][checkboxFields[i]]) {
            total += FormTranslater[checkboxFields[i]]
        }
    }

    return total
}

// Temporary function for calculating index in the temporary displayImage array
function parseFormForDynamicImage(state: any): number {
    // profile: 0 - 7, waist: 8 - 15, fullbody: 16 - 23

    let profile = 0;
    let waist = 8;
    let fullbody = 16;
    let index = 0;

    let color = 1;
    let shade = 2;
    let background = 4;

    // Check the radio button
    if (state["RadioFields"]["profile"]) index += profile;
    if (state["RadioFields"]["waist"]) index += waist;
    if (state["RadioFields"]["fullbody"]) index += fullbody;

    if (state["CheckBox"]["lineColor"]) index += color;
    if (state["CheckBox"]["shading"]) index += shade;
    if (state["CheckBox"]["background"]) index += background;
    
    return index
}

export const Commission: React.FC = () => {
    const [formState, setFormState] = useState(FormState);

    // Will be replaced with a lazy-loaded fetch on component load
    const displayImage: Array<string> = [
        "profile",
        "profile + color",
        "profile + shade",
        "profile + shade + color",
        "profile + background",
        "profile + background + color",
        "profile + background + shade",
        "profile + background + shade + color",
        "waist",
        "waist + color",
        "waist + shade",
        "waist + shade + color",
        "waist + background",
        "waist + background + color",
        "waist + background + shade",
        "waist + background + shade + color",
        "fullbody",
        "fullbody + color",
        "fullbody + shade",
        "fullbody + shade + color",
        "fullbody + background",
        "fullbody + background + color",
        "fullbody + background + shade",
        "fullbody + background + shade + color"
    ];

    return (
        <section id="Commission" className="page">
            <h1>Commissions</h1>

            {/* User Input Section */}
            <div className="commission-options">
                <CommissionForm formFields={formState} updateForm={setFormState}/>
            </div>
            
            {/* Dynamic Display from user input */}
            <div className="options-display">
                <div>{displayImage[parseFormForDynamicImage(formState)]}</div>
            </div>

            {/* Price Update from User Input */}
            <div className="price-total-container">
                <div className="price">
                    Price: {parseFormForPriceTotal(formState)}
                </div>
            </div>

            {/* Button to send user to email with selected options */}
            <div className="checkout"><button>checkout</button></div>

            {/* <div className="debug"><h2>{JSON.stringify(formState)}</h2></div> */}
        </section>
    )
};