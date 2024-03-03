import { useState } from 'react'
import MainContainer from './pages/MainContainer'
import './App.css'

function App() {
  const [trigger, setTrigger] =  useState(false);

  return (
    <div className='root-container-div'>
    {trigger&&<MainContainer/>}
    <button onClick={() => {
        if(trigger){
          setTrigger(false)
        } else {
          setTrigger(true)
        }
      }
    } className='rounded-button'>easy</button>
    </div>
  )
}

export default App
