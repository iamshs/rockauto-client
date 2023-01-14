import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Routes >
      <Route path='/' element={<Home />} ></Route>
      <Route path="/contact" element={
      <RequireAuth>
         <Contact />
      </RequireAuth>
      } >

      </Route>
      <Route path='/register' element={<Register />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
