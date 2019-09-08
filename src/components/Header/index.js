import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="header">
            <h1 className="title">{props.children}</h1>
            <h2 className="score"> Score: {props.score}  |  Top Score : {props.topScore}</h2>
            <h3>Click an image to begin. Click each image only ONCE. You get a point for each character you click on. But DON'T click more than once or GAME OVER!</h3>
        </div>
    )
}

export default Header;


