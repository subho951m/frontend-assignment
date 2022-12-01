import NavbarComp from "./components/NavbarComp";
import FilterComp from "./components/FilterComp";
import HomeComp from "./components/HomeComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";
import PaginationComp from "./components/PaginationComp";

function App() {
  const [dummyData, setdummyData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  //set page number
  const [currentPage, setCurrentPage] = useState(1);
  //set the number of tiles to be dispalyed per page
  const [tilesPerPage, setTilesPerPage] = useState(11);

  //Function to create sample fake data
  function populateData() {
    const Datas = [];
    const randomPlace = ["New York, USA", "Chicago, USA", "Seattle, USA"];
    const randomDate = [
      {from:'2022-11-01T00:00:00.000Z' , to:'2022-12-01T00:00:00.000Z'},
      {from:'2022-12-01T00:00:00.000Z' , to:'2023-01-01T00:00:00.000Z'},
      {from:'2023-01-01T00:00:00.000Z' , to:'2023-02-01T00:00:00.000Z'}
    ];
    const randomPrice = [{from:0 , to:500}, {from:500 , to:2500}, {from:2500 , to:5000}];
    const randomPropertyType = ["House", "Villa", "Plot"];

    for(let i = 0; i<randomPlace.length; i++){
      for(let j = 0; j<randomDate.length; j++){
        for(let k = 0; k<randomPrice.length; k++){
          for(let l = 0; l<randomPropertyType.length; l++){
            const obj = {
              name: faker.address.street(),
              place: randomPlace[i],
              availableDate: faker.date.between(randomDate[j].from, randomDate[j].to),
              price: faker.finance.amount(randomPrice[k].from, randomPrice[k].to, 0, '$'),
              property: randomPropertyType[l]
            }
            Datas.push(obj);
          }
        }
      }
    }


    //Code for shuffling the Datas Array
    for (var i = Datas.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));         
        var temp = Datas[i];
        Datas[i] = Datas[j];
        Datas[j] = temp;
    }

    return Datas;
    // console.log(Datas);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setdummyData(populateData());
      setLoading(false);
    }

    fetchData();
    // console.log(dummyData);
  }, []);


  //logic of displaying posts in a page
  const indexOfLastTile = currentPage * tilesPerPage;
  const indexOfFirstTile = indexOfLastTile - tilesPerPage;
  const currentdummyData = dummyData.slice(indexOfFirstTile, indexOfLastTile);


  //change pageR
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <div className="search-filter">
        <FilterComp></FilterComp>
      </div>
      <div className="content">
        <HomeComp currentdummyData={currentdummyData} loading={loading}></HomeComp>
      </div>
      <PaginationComp tilesPerPage={tilesPerPage} totalTiles={dummyData.length} paginate={paginate}></PaginationComp>
    </div>
  );
}

export default App;
