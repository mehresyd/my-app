import React from "react";
import "./ListItem.css"


const ListItem = (props) => {
    const {item, onDelete} = props;
    const [showDeleteButton, setShowDeleteButton] = React.useState(false);

    const handleMouseEnter = () => {
       
        setShowDeleteButton(true);
    }

    const handleMouseLeave = () => {
      
        setShowDeleteButton(false);
    }

    return(
        <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div>{item}</div>


            {
                showDeleteButton ? 
                <button onClick={onDelete}>Delete</button>
                :null
            }

        </li>
    )
}

export default ListItem