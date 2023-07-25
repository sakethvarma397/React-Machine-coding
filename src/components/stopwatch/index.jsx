import React, {useState, useEffect} from 'react'

function Index () {
    const [isActive, setIsActive] =  useState(false);
    const [counter, setCounter] =  useState(0);

    useEffect(() => {
        let timerHandle = null;
        if (isActive) {
            timerHandle = setInterval(() => {
                setCounter(prev => prev +1);
            }, 1000)
        }

        return () => {
            clearInterval(timerHandle);
        }
    }, [isActive])


    const handleReset = () => {
        setIsActive(false);
        setCounter(0);
    }

    return (
        <div className='stopwatch'>
            <h1>Timer value: {counter} </h1>
            <div className='buttons'>
                <button onClick={handleReset}>Reset</button>
                <button onClick={() => setIsActive(prev => !prev)}>{isActive ? 'Pause' : 'Start'}</button>
            </div>
        </div>
    )
}

export default Index;
