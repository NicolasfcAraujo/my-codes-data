import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
