import * as actions from './actions';

const initialFormState = {
    profile: false,
    waist: false,
    fullbody: false,
    color: false,
    shading: false,
    background: false,
    priceTotal: 0
}

function getPriceReduction(state = initialFormState, action) {
    switch(action.type) {
        case actions.CHANGE_TO_PROFILE:
            if (state.waist) {
                return 10
            } else if (state.fullbody) {
                return 15
            } else {
                return 0
            }
        case actions.CHANGE_TO_FULLBODY:
            if (state.waist) {
                return 10
            } else if (state.profile) {
                return 5
            } else {
                return 0
            }                  
        case actions.CHANGE_TO_WAIST:
            if (state.profile) {
                return 5
            } else if (state.fullbody) {
                return 15
            } else {
                return 0
            }
        default:
            return 0
    }
}

export function commissionApp(state = initialFormState, action) {
    switch(action.type) {
        case actions.CHANGE_TO_PROFILE:
            return {
                ...state,
                profile: true,
                waist: false,
                fullbody: false,
                priceTotal: action.price + state.priceTotal - getPriceReduction(state, action)
            }
        case actions.CHANGE_TO_WAIST:
            return {
                ...state,
                profile: false,
                waist: true,
                fullbody: false,
                priceTotal: action.price + state.priceTotal - getPriceReduction(state, action)
            }
        case actions.CHANGE_TO_FULLBODY:
            return {
                ...state,
                profile: false,
                waist: false,
                fullbody: true,
                priceTotal: action.price + state.priceTotal - getPriceReduction(state, action)
            }
        case actions.ADD_COLOR:
            return {
                ...state,
                color: true,
                priceTotal: state.priceTotal + action.price
            }
        case actions.REMOVE_COLOR:
            return {
                ...state,
                color: false,
                priceTotal: state.priceTotal - action.price
            }
        case actions.ADD_SHADING:
            return {
                ...state,
                shading: true,
                priceTotal: state.priceTotal + action.price
            }
        case actions.REMOVE_SHADING:
            return {
                ...state,
                shading: false,
                priceTotal: state.priceTotal - action.price
            }
        case actions.ADD_BACKGROUND:
            return {
                ...state,
                background: true,
                priceTotal: state.priceTotal + action.price
            }

        case actions.REMOVE_BACKGROUND:
            return {
                ...state,
                background: false,
                priceTotal: state.priceTotal - action.price
            }
        default:
            return state
    }
}