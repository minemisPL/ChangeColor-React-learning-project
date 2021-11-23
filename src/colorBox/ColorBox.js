import colorNames from 'colornames'

const ColorBox = ({ colorName }) => {
    const textToDisplay = colorName || "Empty Value"
    let backgroundColor = colorNames(colorName)
        ? colorName
        : "white"
    const textColor = colorName
        ? getMatchingColor(backgroundColor)
        : "black"

    if (colorName.toLowerCase() === "i love anna"
        || colorName.toLowerCase() === "i love mateusz" ) {
        backgroundColor = "HotPink"
    }

    return (
        <div className={'colorBox'} style={{
            backgroundColor: `${backgroundColor}`,
            color: `${textColor}`
        }}>
            {textToDisplay}
        </div>
    );
};

function getMatchingColor(colorName) {
    const hexColor = colorNames(colorName)
    const colorRGB = hexToRgb(hexColor)

    const HALF_OF_MAX_RGB_BRIGHTNESS = 382.5

    const rgbBrightnessSum = colorRGB
        ? colorRGB.r + colorRGB.g + colorRGB.b
        : HALF_OF_MAX_RGB_BRIGHTNESS + 1

    return rgbBrightnessSum > HALF_OF_MAX_RGB_BRIGHTNESS
        ? "black"
        : "white"
}

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export default ColorBox;