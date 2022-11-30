import NavbarComp from "./components/NavbarComp";
import FilterComp from "./components/FilterComp";
import HomeComp from "./components/HomeComp";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <div className="search-filter">
        <FilterComp></FilterComp>
      </div>
      <div className="content">
        <HomeComp></HomeComp>
      </div>
    </div>
  );
}

export default App;
