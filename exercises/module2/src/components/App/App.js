import Display from "components/Display/Display"
import Button from "components/Button/Button"

import { useState } from "react"

const App = () => {
  const [ counter, setCounter ] = useState(0)

  //const increaseByOne = () => setCounter(counter + 1)
  //const decreaseByOne = () => setCounter(counter - 1)
  //const setToZero = () => setCounter(0)

  const changeCount = (delta) => setCounter(counter + delta)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={changeCount(counter)}
        text='plus'
      /> 
    </div>
  )
}

export default App