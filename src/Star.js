import filledStar from "./images/star-filled.png";
import emptyStar from "./images/star-empty.png";
import React from "react";

export default function Star(props) {

    const starIcon = props.isFilled ? filledStar : emptyStar;
    return(
        <img
            src={starIcon}
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}