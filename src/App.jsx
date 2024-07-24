
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login.jsx/Login'
import Dash from './dashboard/Dash'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dash' element={ <Dash/>} />
      </Routes>
    </>
  )
}

export default App
