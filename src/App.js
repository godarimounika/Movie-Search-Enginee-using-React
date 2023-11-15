 import React from "react"
 import { useState } from "react"
 import "./App.css"
 function App() {
  const [seconds, setSeconds] = useState(0)


  const startTimer = () => {
    setInterval(() => {
      setSeconds(seconds => seconds + 1)
  }, 1000)

  }

  const stopTimer = () => {

    clearInterval(setSeconds(0))
        document.querySelector('#counter').remove()
  }

  const currentCount = seconds

  return (

      <div className="counter-container">
         <h1 id="counter">0:0:{currentCount} </h1>
          <button className="start-button" onClick={startTimer}>start</button>
          <button className="stop-button" onClick={stopTimer}>stop</button>
         
      </div>
  )
}
export default   App;