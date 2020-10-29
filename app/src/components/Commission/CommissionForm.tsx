import React from 'react';

export const CommissionForm = (props: any) => {
    function radioChecked(e: any) {
        let option = e.target.value;
        switch (option) {
            case "profile":
                props.changeToProfile();
                break;
            case "waist":
                props.changeToWaist();
                break;
            case "fullbody":
                props.changeToFullBody();
                break;
            default:
                return
        }
    }

    function checkboxChecked(e: any) {
        let option = e.target.name;

        switch (option) {
            case "color":
                props.color
                ? props.removeColor()
                : props.addColor()
                break;
            case "shading":
                props.shading
                ? props.removeShading()
                : props.addShading()
                break;
            case "background":
                props.background
                ? props.removeBackground()
                : props.addBackground()
                break;
            default:
                return
        }

    }

    return (
        <div className="pseudo-form">
            <div className="radio-options"
                onChange={radioChecked}>
                <label className="radio-options-container">Profile
                    <input type="radio" value="profile" name="single-option"/>
                    <span className="checkcircle"></span>
                </label>
                <label className="radio-options-container">Waist
                    <input type="radio" value="waist" name="single-option"/>
                    <span className="checkcircle"></span>
                </label>
                <label className="radio-options-container">Full Body
                    <input type="radio" value="fullbody" name="single-option"/>
                    <span className="checkcircle"></span>
                </label>
            </div>
            <div className="check-options"
                onChange={checkboxChecked}>
                <label className="check-options-container">Color
                    <input type="checkbox" name="color"/>
                    <span className="checkbox"></span>
                </label>
                <label className="check-options-container">Shading
                    <input type="checkbox" name="shading"/>
                    <span className="checkbox"></span>
                </label>
                <label className="check-options-container check-disabled"><span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>Background</span><p style={{fontSize: 12}}>(Coming soon)</p>
                    <input type="checkbox" name="background" disabled/>
                    <span className="checkbox"></span>
                </label>
            </div>
        </div>
    )
}