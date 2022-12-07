import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import RentComp from "./components/RentComp";
import HomeComp from './components/HomeComp';
import BuyComp from './components/BuyComp';
import ManagePropertyComp from './components/ManagePropertyComp';
import ResourceComp from './components/ResourceComp';
import SellComp from './components/SellComp';
import LoginComp from './components/LoginComp';
import SignupComp from './components/SignupComp';
import PaginationComp from "./components/PaginationComp";
import NotFound from "./components/NotFound";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
      <NavbarComp></NavbarComp>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<HomeComp/>} />
          <Route path='/rent' element={<RentComp/>} />
          <Route path='/buy' element={<BuyComp/>} />
          <Route path='/sell' element={<SellComp/>} />
          <Route path='/manage/:id' element={<ManagePropertyComp/>} />
          <Route path='/resource/:id' element={<ResourceComp/>} />          
          <Route path='/login' element={<LoginComp/>} />          
          <Route path='/signup' element={<SignupComp/>} />          
          <Route path='*' element={<NotFound/>} />          
        </Routes>
      </div>
      <PaginationComp></PaginationComp>
      </div>
    </Router>
  );
}

export default App;
