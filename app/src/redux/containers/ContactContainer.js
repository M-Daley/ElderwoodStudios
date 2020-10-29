import { connect } from 'react-redux';
import { Contact } from '../../components/Contact/Contact';
import getImage from "../../utils/testDynamicImage";

const mapStateToProps = state => {
    return {
        priceTotal: state.priceTotal,
        items: returnSelectedItemsFromCommissionState(state),
        url: getImage(state)
    }
}

function returnSelectedItemsFromCommissionState(state) {
    return Object.keys(state).map((key, _) => {
        if (typeof state[key] == 'boolean') {
            if (state[key]) return `${key} `
        }
    })
}

const ContactContainer = connect(mapStateToProps)(Contact);
export default ContactContainer;