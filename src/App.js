import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

import './App.css';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Dashboard />} ></Route>
    <Route path='/profile' element={<Profile />} ></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
