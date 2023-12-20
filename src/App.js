import './App.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Home1 from './pages/home1';
import Home2 from './pages/home2';
import Mybook from './pages/mybook';
import DetailBook1 from './pages/detailbook1';
import DetailBook2 from './pages/detailbook2';
import SearchResult1 from './pages/searchresult';
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home1/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/mybook' element={<Mybook/>} />
        <Route path='/home' element={<Home2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
