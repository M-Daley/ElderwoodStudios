import React from 'react';
import './css/Commission.css';

import FormFields from '../../redux/containers/CommissionFormFields';

type CommissionsType = {
    priceTotal: number,
    url: string
}

export const Commission: React.FC<CommissionsType> = ({ priceTotal, url }) => {
    return (
        <section id="Commission" className="page">
            <h1>Commissions</h1>

            <div className="commission-options">
                <FormFields />
            </div>
            
            <div className="options-display">
                <div>{url}</div>
            </div>

            <div className="price-total-container">
                <div className="price">
                    Price: ${priceTotal}.00
                </div>
                <div className="checkout"><button>Checkout</button></div>
            </div>

            {/* <div className="debug"><h2>{JSON.stringify(formState)}</h2></div> */}
        </section>
    )
};