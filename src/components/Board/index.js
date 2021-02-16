import "./Board.css"
import React from "react"
import GridRow from "../GridRow";

const Board = () => {
    let gridRows = [<GridRow/>, <GridRow/>, <GridRow/>]
    return <div className="board">{gridRows}</div>
};

export default Board