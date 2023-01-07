import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Register from './Pages/Authentication/Register';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Routes >
      <Route path='/' element={<Home />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/register' element={<Register />} ></Route>
     </Routes>
     
    </div>
  );
}

export default App;
