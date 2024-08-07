import { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import './App.css'

function App() {


  const [header, setHeader] = useState("")
  const socket = io("http://localhost:3000")

  useEffect(()=>{
    socket.on("connect", ()=>{
      setHeader(socket.id)
    })
  },[])

  return (
    <>
      <h1>{header}</h1>
    </>
  )
}

export default App
