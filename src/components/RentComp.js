import { useState, useEffect } from 'react';
import UseFetch from './UseFetch'
import PaginationComp from './PaginationComp';
import FilterComp from './FilterComp';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function RentComp() {

  const { dummyData, isLoading } = UseFetch();

  //for filterComp
  const uniquePlaces = Array.from( new Set( dummyData.map((data) => { return data.place; }) ) );
  const maximumPrice = Math.max(...(dummyData.map((data) => { return Number(data.price.slice(1)); } )) );
  const uniquePropertyTypes = Array.from( new Set( dummyData.map((data) => { return data.property; }) ) );
  
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

  //filter
  // const [searchParams, setSearchParams] = useSearchParams();
  // const isFilter = searchParams.get('filter');

  // const changeSearchParams = (searchQuery) => {
  //   setSearchParams(searchQuery);
  //   console.log(searchParams);
  // }

  if(isLoading){
    return <h2 style={{ }}>Loading...</h2>;
  }

  function dateFormat(inputDate) {
    let formattedDate = (inputDate.getDate()) + "-" + (inputDate.getMonth() + 1) + "-" + (inputDate.getFullYear());
    return formattedDate;
  }
  

  return (
    
    <div className="container">
      <div className="search-filter">
        <FilterComp uniquePlaces={uniquePlaces} maximumPrice={maximumPrice} uniquePropertyTypes={uniquePropertyTypes} isLoading={isLoading}></FilterComp>
      </div>
      
      <div className="container">
        <Row xs={1} md={3} className="g-4 m-x-5">
        {currentDummyData.map((data) => (
            <Col key={data.id}>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>{data.price}/month</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.name}</Card.Subtitle>
                <Card.Text>
                    Property Type : {data.property}
                    <br />
                    Location : {data.place}
                </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Available From : {dateFormat(data.availableDate)}</Card.Footer>
            </Card>
            </Col>
        ))}
        </Row>
    </div>

    <PaginationComp tilesPerPage={tilesPerPage} totalTiles={dummyData.length} paginate={paginate}></PaginationComp>
    </div>
  );
}

export default RentComp;