import React from "react";
import "./ListItem.css"

const ListItem = (props) => {
    const {item, onDelete} = props;

    return(
        <li>
            <div>{item}</div>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default ListItem