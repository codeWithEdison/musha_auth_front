
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import { BrowserRouter , Routes,  Route, Navigate} from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login />} />
      <Route  path="/register" element={<Register />} />
      <Route  path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   </BrowserRouter>
    
  )
}

export default App
