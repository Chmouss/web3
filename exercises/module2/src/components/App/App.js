import Display from "components/Display/Display"
import Button from "components/Button/Button"
//import React from "react"

import { useState } from "react"

const App = () => {
  const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")) ?? 0)
  // ->    ?? if premiere cond null ou undefined, il prend la valeur a droite

  //const increaseByOne = () => setCounter(counter + 1)
  //const decreaseByOne = () => setCounter(counter - 1)
  //const setToZero = () => setCounter(0)

  const changeCount = (delta) => {
    setCounter(counter + delta)
    localStorage.setItem("counter", JSON.stringify(counter + delta))
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={changeCount}
        text='plus'
        value={1}
      /> 
      <Button
        onClick={changeCount}
        text='moins'
        value={-1}
      /> 
    </div>
  )
}

export default App