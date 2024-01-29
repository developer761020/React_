
import './App.css';
import  {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
         
        <Route path='/sign' element={<Signup />}/>
        
        <Route path='/login' element={<Login />}/>

        <Route path='/profile' element={<Profile />}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
