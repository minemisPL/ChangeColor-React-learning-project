import React from 'react';
import '../colorBox/colorBox.css';
import '../addColorBar/addColorBar.css'
import ColorBox from "../colorBox/ColorBox";
import AddColorBar from "../addColorBar/AddColorBar";
import { useState } from "react";

const Container = () => {
    const [color, setColor] = useState("")

    return (
        <div className={"container"}>
            <ColorBox colorName={color}/>
            <AddColorBar setColor={setColor}/>
        </div>
    );
};

export default Container;