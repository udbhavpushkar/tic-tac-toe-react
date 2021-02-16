import './App.css';
import React, {useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import GridRow from "../GridRow";

const App = () => {

    const [gameState, setGameState] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]);
    const [curPlayer, setCurPlayer] = useState("X");
    const [roundWon, setRoundWon] = useState(false)
    const isWin = ()=>{
        for (let i = 0; i < 2; i++) {
            if (gameState[i][0]===gameState[i][1] && gameState[i][1]===gameState[i][2] && gameState[i][0]!==""){
                return true
            }
            if (gameState[0][i]===gameState[1][i] && gameState[1][i]===gameState[2][i] && gameState[0][i]!==""){
                return true
            }
        }
        if (gameState[0][0]===gameState[1][1] && gameState[1][1]===gameState[2][2] && gameState[1][1]!==""){
            return true
        }
        if (gameState[0][2]===gameState[1][1] && gameState[1][1]===gameState[2][0] && gameState[1][1]!==""){
            return true
        }
    }

    function isDraw(){
        let flag = true
        gameState.forEach((row)=>{
            row.forEach((ele)=>{
                if (ele===""){
                    flag = false
                    return flag
                }
            })
        })
        if (flag){
            return !roundWon;
        }
    }

    const handlePlayerClick = (ri, ci)=>{
        if (gameState[ri][ci]==="" && !roundWon){
            let newArr = [...gameState]
            newArr[ri][ci] = curPlayer
            setGameState(newArr)
            curPlayer==="X"?setCurPlayer("O"):setCurPlayer("X")
            if (isWin()){
                setRoundWon(true)
            }
            if (isDraw()){
                setCurPlayer("Draw")
            }
        }
    }

    return (
            <div className="App">
                <Header/>
                <div id="board">
                    {gameState.map((row, rowIndex)=>{
                        return <GridRow handlePlayerClick={handlePlayerClick} row={row} rowIndex={rowIndex}/>
                    })}
                </div>
                <Footer roundWon={roundWon} currentPlayer={curPlayer}/>
            </div>
    );
};

export default App;

