
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact= {true} element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
