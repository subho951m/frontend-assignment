import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import RentComp from "./components/RentComp";
import HomeComp from './components/HomeComp';
import BuyComp from './components/BuyComp';
import ManagePropertyComp from './components/ManagePropertyComp';
import ResourceComp from './components/ResourceComp';
import SellComp from './components/SellComp';
import PaginationComp from "./components/PaginationComp";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
      <NavbarComp></NavbarComp>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<HomeComp/>} />
          <Route exact path='/rent' element={<RentComp/>} />
          <Route exact path='/buy' element={<BuyComp/>} />
          <Route exact path='/sell' element={<SellComp/>} />
          <Route exact path='/manage/:id' element={<ManagePropertyComp/>} />
          <Route exact path='/resource/:id' element={<ResourceComp/>} />
        </Routes>
      </div>
      <PaginationComp></PaginationComp>
      </div>
    </Router>
  );
}

export default App;
