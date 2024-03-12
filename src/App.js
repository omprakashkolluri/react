
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Addcourse from './components/Addcourse';
import List from './components/List';


function App() {
  return (
    <Router>
    <div className="App">
     
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link class="nav-link" to="/add">Add courese</Link>
        <Link class="nav-link" to="/list">List Courese</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
   
    <Routes>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/add' element={<Addcourse/>}/>
      <Route exact path='/list' element={<List/>}/>
    </Routes>
    </Router>
  );
}

export default App;
