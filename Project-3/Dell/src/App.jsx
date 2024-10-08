import './App.css'
import { Home } from './Home'
import { Contact } from './Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import { Desktops } from './Product-Page/Desktops'
import { Findstore } from './Home component/Findstore'
import { Login } from './Home component/Login'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/computer' element={<Desktops/>}/>
      <Route path='/findstore' element={<Findstore/>}/>
      <Route path='/login' element={<Login/>}/>
   </Routes>
    </>
  )
}

export default App
