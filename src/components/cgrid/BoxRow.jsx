import React from 'react';
import Box from "./Box.jsx";

// eslint-disable-next-line react/prop-types
function BoxRow({config, handleClick}) {
    return (
        <div className='box-row'>
            {config.map(boxConfig => boxConfig?.id ? (
                <Box
                    isClicked={boxConfig.isClicked}
                    id={boxConfig.id}
                    key={boxConfig.id}
                    handleClick={handleClick}
                />
            ) : null)}
        </div>
    );
}

export default BoxRow;
