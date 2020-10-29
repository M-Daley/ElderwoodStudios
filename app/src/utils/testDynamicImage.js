const getImage = state => {
    if (state.priceTotal === 0) return "No Items Selected"

    const displayImage = [
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

    // Temporary function for calculating index in the temporary displayImage array
    // profile: 0 - 7, waist: 8 - 15, fullbody: 16 - 23

    let profile = 0;
    let waist = 8;
    let fullbody = 16;
    let index = 0;

    let color = 1;
    let shade = 2;
    let background = 4;

    // Check the radio button
    if (state.profile) {
        index += profile
    } else if (state.waist) {
        index += waist
    } else {
    index += fullbody
    }

    if (state.color) index += color;
    if (state.shading) index += shade;
    if (state.background) index += background;
    
    return displayImage[index]
}

export default getImage;