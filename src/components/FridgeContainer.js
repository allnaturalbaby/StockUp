import React, { useState, useEffect } from "react"
import FridgeItem from "./FridgeItem"
import fridgeData from "../fridgeData"

//const data = fridgeItems.map(item => <FridgeItem key={item.id} fItem={item} />)

function FridgeContainer() {
    const [fridgeItems, setFridgeItems] = useState([])

    function addItem() {
       fridgeData.push({id: 10, text: "test"})
    }

    useEffect(() => {
        setFridgeItems(e => fridgeData)
    }, [])

    useEffect(() => {
        setFridgeItems(fridgeItems => fridgeData)
    }, [fridgeItems])
    
    const data = fridgeItems.map(item => <FridgeItem key={item.id} fItem={item} />)
    // console.log(fridgeItems)
    
    return (
        <div className="fridgeContainer">
            {data}
            <button style={{marginTop:"5px"}} onClick={addItem}>add item</button>
        </div>
    )
}

export default FridgeContainer