import "./GridRow.css"
import React from "react"
import GridItem from "../GridItem";

const GridRow = (props) => {
    return <div className="grid-row">
        {props.row.map((col, colIndex)=> (
                <GridItem
                    handlePlayerClick={props.handlePlayerClick}
                    rowIndex={props.rowIndex}
                    colIndex={colIndex}
                    col={col}/>
            ))}
    </div>
};

export default GridRow