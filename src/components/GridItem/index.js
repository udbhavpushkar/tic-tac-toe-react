import "./GridItem.css"
import React from "react"

const GridItem = (props)=>{
    return <div
        onClick={()=>{props.handlePlayerClick(props.rowIndex, props.colIndex)}}
        className="grid-item">{props.col}</div>
}

export default GridItem