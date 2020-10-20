import React from 'react';

export const CommissionForm = (props: any) => {
    function radioChecked(e: any) {
        let option = e.target.value;
        let formCopy = props.formFields;

        for (let x in formCopy["RadioFields"]) {
            x === option
            ? formCopy["RadioFields"][option] = !formCopy["RadioFields"][option]
            : formCopy["RadioFields"][x] = false
        }

        props.updateForm({
            ...formCopy,
        });
    }

    function checkboxChecked(e: any) {
        let option = e.target.name;
        let formCopy = props.formFields;

        formCopy["CheckBox"][option] = !formCopy["CheckBox"][option]

        props.updateForm({
            ...formCopy,
        });
    }

    return (
        <>
            <div
                className="radio-options"
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
            <div className="check-options">
                <label className="check-options-container">Line Color
                    <input type="checkbox" name="lineColor" onChange={checkboxChecked}/>
                    <span className="checkbox"></span>
                </label>
                <label className="check-options-container">Shading
                    <input type="checkbox" name="shading" onChange={checkboxChecked}/>
                    <span className="checkbox"></span>
                </label>
                <label className="check-options-container">Background
                    <input type="checkbox" name="background" onChange={checkboxChecked}/>
                    <span className="checkbox"></span>
                </label>
            </div>
        </>
    )
}