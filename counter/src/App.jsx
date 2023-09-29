import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter == 20) return
    setCounter(counter+1)
  }

  const removeValue = () => {
    if(counter == 0) return
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
