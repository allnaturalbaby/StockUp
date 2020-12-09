import React, { useState, useEffect, useRef } from "react"
import FridgeItem from "./FridgeItem"

//const data = fridgeItems.map(item => <FridgeItem key={item.id} fItem={item} />)

function FridgeContainer() {
    const [fridgeItems, setFridgeItems] = useState([/*{id: 0, text: ""}*/])
    let numOfItems = useRef(0)

    function addItem() {
        fetch(`https://5fb777688e07f00016642da7.mockapi.io/todoapp/StockUp/${numOfItems.current}`, 
        {
            method: "DELETE"
        }
        )
        .catch((error) => {
            console.error('Error:', error);
          })
        numOfItems.current = numOfItems.current - 1
    }

    // https://5fb777688e07f00016642da7.mockapi.io/todoapp/StockUp
    useEffect(() => {
        // ${items.length-1}
        fetch(`https://5fb777688e07f00016642da7.mockapi.io/todoapp/StockUp/`)
        .then(response => response.json())
        .then(data => {
            setFridgeItems(data)
            numOfItems.current = data.length
        }) 
    }, [fridgeItems.length])
    
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