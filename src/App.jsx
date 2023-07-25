import './App.css'
import React from 'react'
import Stopwatch from "./components/stopwatch";
import Cgrid from "./components/cgrid";
import Tictactoe from "./components/tictactoe";
import Directory from "./components/directory";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className='app-container'>
        <Carousel>
            <div className='section'>
                <div className='widget-container'>
                    {<Cgrid />}
                </div>
                <div className='widget-container'>
                    {<Tictactoe />}
                </div>
            </div>
            <div className='section'>
                <div className='widget-container'>
                    {<Stopwatch />}
                </div>
                <div className='widget-container'>
                    {<Directory />}
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default App
