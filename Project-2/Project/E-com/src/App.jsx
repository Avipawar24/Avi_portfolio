import { useState } from 'react'
import { Navbartop} from './components/Navbartop'
import './App.css'
import { Secondnav } from './components/Secondnav'
import { Products } from './components/Products'

function App() {


  return (
    <>
    <Navbartop/>
    <Secondnav/>
    <Products/>
    </>
  )
}

export default App
