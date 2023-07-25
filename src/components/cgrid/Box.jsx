import React from 'react';

function Box({isClicked, id, handleClick}) {
    return (
        <div
            className='box'
            style={{backgroundColor: isClicked ? 'greenyellow': 'white'}}
            onClick={() =>handleClick(id)}
        ></div>
    );
}

export default Box;
