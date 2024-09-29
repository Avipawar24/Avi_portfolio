import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Shop from './components/Shop'
import Iphone from './components/Iphone'
import Mac from './components/Mac'
import Watch from './components/Watch'
import Ipad from './components/Ipad'



function App() {

  return (

    <div className='app w-full h-screen bg-zinc-100'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/iphone' element={<Iphone/>}/>
      <Route path='/mac' element={<Mac/>}/>
      <Route path='/watch' element={<Watch/>}/>
      <Route path='/ipad' element={<Ipad/>}/>
    </Routes>
    </div>
  )
}

export default App

