import React from "react"

function FridgeItem(props) {
    return (
        <div className="fridgeItem-container">
            <h3 className="fridgeItem-text divider">{props.fItem.text}</h3>
        </div>
    )
}

export default FridgeItem