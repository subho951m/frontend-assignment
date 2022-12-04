import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import NavbarComp from "./components/NavbarComp";
import FilterComp from "./components/FilterComp";
import HomeComp from "./components/HomeComp";
import PaginationComp from "./components/PaginationComp";
import UseFetch from './components/UseFetch';


function App() {
  

  const { dummyData, isLoading } = UseFetch();
  
  //set page number
  const [currentPage, setCurrentPage] = useState(1);
  //set the number of tiles to be dispalyed per page
  const [tilesPerPage, setTilesPerPage] = useState(11);

  //logic of displaying posts in a page
  const indexOfLastTile = currentPage * tilesPerPage;
  const indexOfFirstTile = indexOfLastTile - tilesPerPage;
  const currentDummyData = dummyData.slice(indexOfFirstTile, indexOfLastTile);

  
  //change page number
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <div className="search-filter">
        <FilterComp></FilterComp>
      </div>
      <div className="content">
        <HomeComp currentDummyData={currentDummyData} isLoading={isLoading}></HomeComp>
      </div>
      <PaginationComp tilesPerPage={tilesPerPage} totalTiles={dummyData.length} paginate={paginate}></PaginationComp>
    </div>
  );
}

export default App;
