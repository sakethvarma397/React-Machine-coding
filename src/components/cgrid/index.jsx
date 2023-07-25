import React from 'react';
import BoxGrid from "./BoxGrid.jsx";

const layout = [
    [true, true, true],
    [true, false, false],
    [true, true, true],
]
function Index() {
    return (
        <div className='widget-container'>
            <BoxGrid layout={layout} />
        </div>
    );
}

export default Index;
