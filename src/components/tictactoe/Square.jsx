import React from 'react';

// eslint-disable-next-line react/prop-types
function Square({onSquareClick, value}) {
    return (
        <div className='box' onClick={onSquareClick}>
            {value}
        </div>
    );
}

export default Square;
