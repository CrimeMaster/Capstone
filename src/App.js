import './App.css';
import Home from './pages/Home'
import Genre from './pages/Genre';
import{BrowserRouter, Routes, Route}  from 'react-router-dom'


function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>} />
            <Route path = "/register" element = {<Register/>} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/genre" element = {<Genre/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
