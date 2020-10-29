import { connect } from 'react-redux';
import { CommissionForm } from '../../components/Commission/CommissionForm';
import * as actions from '../actions';

const mapStateToProps = state => {
    return {
        color: state.color,
        shading: state.shading,
        background: state.background
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeToProfile: () => {
            dispatch(actions.changeToProfile())
        },
        changeToWaist: () => {
            dispatch(actions.changeToWaist())
        },
        changeToFullBody: () => {
            dispatch(actions.changeToFullbody())
        },
        addColor: () => {
            dispatch(actions.addColor())
        },
        removeColor: () => {
            dispatch(actions.removeColor())
        },
        addShading: () => {
            dispatch(actions.addShading())
        },
        removeShading: () => {
            dispatch(actions.removeShading())
        },
        addBackground: () => {
            dispatch(actions.addBackground())
        },
        removeBackground: () => {
            dispatch(actions.removeBackground())
        }
    }
}

const FormFields = connect(mapStateToProps, mapDispatchToProps)(CommissionForm);
export default FormFields;