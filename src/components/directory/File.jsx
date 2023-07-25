import React from 'react';
import {AiOutlineFileText} from 'react-icons/ai';

function File({name}) {
    return (
        <div className='file'>
            <div className='title'>
                <AiOutlineFileText />
                <div>{name}</div>
            </div>
        </div>
    );
}

export default File;
