import React, {useState} from 'react';
import Board from "./Board.jsx";

function Index(props) {
    // eslint-disable-next-line no-unused-vars
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const isXNext = currentMove%2 === 0 ;

    const currentSquares = history[currentMove];
    const onPlay = (newSquares) => {
        const nextHistory = [...history.slice(0, currentMove+1), newSquares]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className='game'>
            <div className='game-board'>
                <Board squares={currentSquares} onPlay={onPlay} isXNext={isXNext} />
            </div>
            <div className='game-info'>
                <ul>{moves}</ul>
            </div>
        </div>
    );
}

export default Index;