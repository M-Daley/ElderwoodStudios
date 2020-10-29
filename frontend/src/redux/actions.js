export const CHANGE_TO_PROFILE = "PROFILE",
    CHANGE_TO_WAIST = "WAIST",
    CHANGE_TO_FULLBODY = "FULLBODY",
    ADD_COLOR = "ADD_COLOR",
    REMOVE_COLOR = "REMOVE_COLOR",
    ADD_SHADING = "ADD_SHADING",
    REMOVE_SHADING = "REMOVE_SHADING",
    ADD_BACKGROUND = "ADD_BACKGROUND",
    REMOVE_BACKGROUND = "REMOVE_BACKGROUND";

export function changeToProfile() {
    return {
        type: CHANGE_TO_PROFILE,
        price: 5
    }
}

export function changeToWaist() {
    return {
        type: CHANGE_TO_WAIST,
        price: 10
    }
}

export function changeToFullbody() {
    return {
        type: CHANGE_TO_FULLBODY,
        price: 15
    }
}

export function addColor() {
    return {
        type: ADD_COLOR,
        price: 5
    }
}

export function removeColor() {
    return {
        type: REMOVE_COLOR,
        price: 5
    }
}

export function addShading() {
    return {
        type: ADD_SHADING,
        price: 5
    }
}

export function removeShading() {
    return {
        type: REMOVE_SHADING,
        price: 5
    }
}

export function addBackground() {
    return {
        type: ADD_BACKGROUND,
        price: 5
    }
}

export function removeBackground() {
    return {
        type: REMOVE_BACKGROUND,
        price: 5
    }
}