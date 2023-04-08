//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Login from './components/Login.js';
import Singup from  './components/Singup';
import Profile from './components/Profile.js';
import Homepage from './components/Homepage';
function App() {
  return (
      <div className='App'>
         <Router>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/singup' element={<Singup/>} />
                <Route path='/home' element={<Homepage/>} />
                <Route path='/profile' element={<Profile/>} />
            </Routes>
         </Router>


      </div>
  );
}

export default App;
