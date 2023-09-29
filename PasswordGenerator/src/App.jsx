import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassWord] = useState("")

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+= "!@#$%^&*()_+=-~`':;"

    for(let i = 1;i<=length;i++){
      pass +=str[Math.floor((Math.random()*str.length+1))]
    }
    setPassWord(pass)
  },[length, numberAllowed,charAllowed,setPassWord])
  
  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])

  const passref = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,51)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className='flex flex-wrap justify-center flex-col items-center bg-gray-800 w-screen p-5'>
     <h1 className='mb-5 text-2xl font-bold'>Password Generator</h1>
     <div class="flex w-full items-center space-x-2 md:w-2/3">
  <input
    class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-black text-xl font-sans"
    type="text"
    value={password}
    readOnly
    placeholder="Password"
    ref={passref}
  />
  <button
    type="button"
    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-blue-600"
    onClick={copyToClipboard}
  >
    Copy
  </button>
    </div>

    <div className='flex text-sm gap-x-10 mt-5'>
      <div className='flex items-center gap-x-1'>
        <input
         type="range" 
         min={8}
         max={50}
         value={length}
         className='cursor-pointer'
         onChange={(e)=>{setLength(e.target.value)}}
         />
         <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        />
        <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}
        />
        <label>Charecters</label>
      </div>
    </div>
    
</div>
    </>
  )
}

export default App
