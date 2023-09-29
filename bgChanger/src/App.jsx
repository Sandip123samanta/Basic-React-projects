import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div style={{width: '100vw',height: '100vh',backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-grey-200' style={{color: 'black'}}>
          <button className='outline-none m-3 text-white bg-red-700 shadow-lg'
          onClick={()=> setColor('red')}
          >Red</button>
          <button className='outline-none m-3 text-white bg-blue-700 shadow-lg'
          onClick={()=> setColor('blue')}
          >Blue</button>
          <button className='outline-none m-3 text-white bg-green-700 shadow-lg'
          onClick={()=> setColor('green')}
          >Green</button>
          <button className='outline-none m-3 text-white bg-yellow-700 shadow-lg'
          onClick={()=> setColor('yellow')}
          >Yellow</button>
          <button className='outline-none m-3 text-white bg-pink-700 shadow-lg'
          onClick={()=> setColor('pink')}
          >Pink</button><button className='outline-none m-3 text-black bg-white shadow-lg'
          onClick={()=> setColor('white')}
          >White</button>
        </div>
      </div>
    </>
  )
}

export default App
