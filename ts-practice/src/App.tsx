import React, { useState } from 'react'
import Rectangle from './Interface.js'

const App = () => {

  const [first, setfirst] = useState<string[]>("Laia")


  function show(a: Rectangle["height"]) {
    console.log(a)
  }

  show("Sarosh");



  return (
    <div></div>
  )
}

export default App