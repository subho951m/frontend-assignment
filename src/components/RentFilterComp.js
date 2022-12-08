import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSearchParams } from 'react-router-dom';


function RentFilterComp({ uniquePlaces, maximumPrice, uniquePropertyTypes, isLoading, changeSearchParams }) {
  
  // calculate feasible price range for the given data
  const priceRange = [[0, 500]];
  for(let i=500; i<=maximumPrice; i=i+2000){
    priceRange.push([i, i+2000]);
  }

  //set move-in date to be default date
  const date = new Date();
  let moveInDate = `${date.getFullYear()}-${date.getMonth()+1 < 10? `0${date.getMonth()+1}` : date.getMonth()+1}-${date.getDate() < 10? `0${date.getDate()}` : date.getDate()}`;


  //parameters for filter dropdown
  const [place, setPlace] = useState("All");
  const [moveIn, setMoveIn] = useState(moveInDate);
  const [propertyType, setPropertyType] = useState("All");
  const [price, setPrice] = useState("All");

  //logic to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = { place, moveIn, price, propertyType };
    changeSearchParams({
      filter: 'active',
      location: search.place,
      date: search.moveIn,
      limit: search.price,
      type: search.propertyType
    });
  }

  //Reset Filter logic
  const handleReset = () => {
    changeSearchParams({ });
  }

  //change filter option according to url
  const [filterParams, setFilterParams] = useSearchParams();
  useEffect(() => {
    if(filterParams.get('filter')==='active'){
      setPlace(filterParams.get('location'));
      setMoveIn(filterParams.get('date'));
      setPropertyType(filterParams.get('type'));
      setPrice(filterParams.get('limit'));
    }
  }, []);
  

  if(isLoading){
    return <h2 style={{ }}>Loading...</h2>;
  }

  return (
      <Form onSubmit={handleSubmit}>
      <div className="container my-3">
      <Row className="d-flex justify-content-between">
        <Col xs="auto" className="mx-4" style={{width: "9rem"}}>
            <Row xs="auto">
            <label className="w-100">Location</label>
            <Form.Select onChange={(e) => setPlace(e.target.value)} value={place}>
                { <option key="AllPlaces" value="All">All Locations</option> }
                {uniquePlaces.map((data) => (
                  <option key={data} value={data}>{ data }</option>
                ))}
            </Form.Select>
            </Row>
        </Col>

        <Col xs="auto" className="mx-4" style={{width: "9rem"}}>
            <Row xs="auto">
            <label className="w-100">Date</label>
            <input type="date" className="form-control" value={moveIn} onChange={(e) => setMoveIn(e.target.value) }/>
            </Row>
        </Col>

        <Col xs="auto" className="mx-4" style={{width: "9rem"}}>
            <Row xs="auto">
            <label className="w-100">Property Type</label>
            <Form.Select onChange={(e) => setPropertyType(e.target.value) } value={propertyType}>
              { <option key="AllTypes" value="All">All Types</option> }
              {uniquePropertyTypes.map((data, idx) => (
                  <option key={data} value={data}>{ data }</option>
              ))}
            </Form.Select>
            </Row>
        </Col>
        
        <Col xs="auto" className="mx-4" style={{width: "9rem"}}>
            <Row xs="auto">
            <label className="w-100">Price Range</label>
            <Form.Select onChange={(e) => setPrice(e.target.value) } value={price}>
              { <option key="AllRanges" value="All">All Ranges</option> }
              {priceRange.map((data) => (
                  <option 
                  key={`$${data[0]}-$${data[1]}`} 
                  value={`$${data[0]}-$${data[1]}`}
                  >
                    { `$${data[0]}-$${data[1]}` }
                  </option>
              ))}
            </Form.Select>
            </Row>
        </Col>
            
        <Col xs="auto" className="my-auto mx-4">
          <Button type="submit">Submit</Button>
        </Col>
        
        <Col xs="auto" className="my-auto mx-4">
        <Button onClick={handleReset}>Reset</Button>
        </Col>
      </Row>
      </div>
    </Form>
  );
}

export default RentFilterComp;