import { useState } from "react"

const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectSquare, playingSymbor})
{
    const [gameBoard, setGameBoard] = useState(initalGameBoard);
    function handleSelectSquarae(rowIndex, colIndex)
    {
        setGameBoard((prevGameBoard)=>
        {
            /* 직접 배열을 접근 방식을 선택할 경우 자바 스크립트가 리액트 
            보다 먼저 실행되기 때문에 직접 접근하여서 수정하면 에러가 발생할
            수 있다.
            prevGameBoard[rowIndex][colIndex] = 'X';
            return prevGameBoard;*/
            const updateBoard = [...prevGameBoard.map
                (innerArray=>[...innerArray])];
            updateBoard[rowIndex][colIndex] = playingSymbor;
            return updateBoard;
                
        });
        onSelectSquare();
    }
    return(
        <ol id ="game-board">
            {gameBoard.map((row, rowIndex) => <li key = {rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key = {colIndex}>
                        <button onClick={() =>
                            handleSelectSquarae(rowIndex,colIndex)}>
                        {playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}