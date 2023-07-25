import React, {useState} from 'react';

function Carousel({children}) {
    const [currIndex, setCurrIndex] = useState(0);


    const showNext = () => {
        const nextIndex = currIndex === children.length-1 ? 0 : currIndex+1;
        setCurrIndex(nextIndex);
    }

    const showPrev = () => {
        const prevIndex = currIndex === 0 ? children.length-1 : currIndex-1;
        setCurrIndex(prevIndex);
    }

    const handleKeyDown = (e) =>{
        if(e.keyCode === 37) showPrev();
        if(e.keyCode === 39) showNext();
    }

    const renderIndicators = () => {
        const values = Array.from({length: children.length}, (a,b) => b+1);
        console.log(values);
        return values.map(value => <div className={value-1 === currIndex ? 'indicator active' : 'indicator'} />)
    }

    return (
        <div className='carousel-container' onKeyDown={handleKeyDown} tabIndex={'0'}>
            {children[currIndex]}
            <div className='footer'>
                <div style={{color: '#b4babb'}}>{'<'}</div>
                {renderIndicators()}
                <div style={{color: '#b4babb'}}>{'>'}</div>
            </div>
        </div>
    );
}

export default Carousel;
