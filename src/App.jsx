
import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';


function App() {
  return (
    
    <Router>
      <Navbar/>
      
      <Route path="/"  exact Component={Home}/>
      <Route path="/detail/:id" component={Detail} />
      <Route path="/contacto" component={Contact} />
      <Route path="/favs" component={Favs} />
      
      <Footer/>
    </Router>
    
    
      
  );
  
}

export default App;
