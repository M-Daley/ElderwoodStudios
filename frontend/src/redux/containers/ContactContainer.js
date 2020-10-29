import { connect } from 'react-redux';
import { Contact } from '../../components/Contact/Contact';
import * as actions from '../actions';

const mapStopToProps = state => {
    return {
        priceTotal: state.priceTotal
    }
}