import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Outlet, useSearchParams } from 'react-router-dom';

function FilterComp({ uniquePlaces, maximumPrice, uniquePropertyTypes, isLoading }) {
  
  // calculate feasible price range for the given data
  const priceRange = [[0, 500]];
  for(let i=500; i<=maximumPrice; i=i+2000){
    priceRange.push([i, i+2000]);
  }

  //set move-in date to be default date
  const date = new Date();
  let moveInDate = ( (date.getFullYear()) 
  + '-' + 
  ( (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) )
   + "-" + 
   ( (date.getDate()) < 10 ? '0' + (date.getDate()) : (date.getDate())) );
  // console.log(formattedDate);

  const [place, setPlace] = useState(uniquePlaces[0]);
  const [moveIn, setMoveIn] = useState(moveInDate);
  const [propertyType, setPropertyType] = useState(uniquePropertyTypes[0]);
  const [price, setPrice] = useState('$' + priceRange[0][0] + ' - ' + '$' + priceRange[0][1]);



  // const [srcprm, setSrcprm] = useSearchParams();

  if(isLoading){
    return <h2 style={{ }}>Loading...</h2>;
  }
  
  // console.log(uniquePlaces);
  // console.log(maximumPrice);
  // console.log(uniquePropertyTypes);
  // console.log(isLoading);

  // console.log(maximumPrice);
  // console.log(priceRange);

  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // const search = { place, moveIn, price, propertyType };
    // setSrcprm({ filter: 'active' });
    // console.log(srcprm);
  }
  
  // console.log(srcprm);

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center justify-content-md-center my-5">
        <Col xs="auto" className="mx-4">
            <Row xs="auto">
            <label className="w-100">Location</label>
            <Form.Select onChange={(e) => setPlace(e.target.value)} value={place}>
                {uniquePlaces.map((data) => (
                  <option key={data} value={data}>{ data }</option>
                ))}
            </Form.Select>
            </Row>
            <p>{ place }</p>
        </Col>

        <Col xs="auto" className="mx-4">
            <Row xs="auto">
            <p className="w-100">Name</p>
            <input type="date" value={moveIn} onChange={(e) => setMoveIn(e.target.value) } />
            <p>{ moveIn }</p>
            </Row>
        </Col>

        <Col xs="auto" className="mx-4">
            <Row xs="auto">
            <p className="w-100">Name</p>
            <Form.Select onChange={(e) => setPropertyType(e.target.value) } value={propertyType}>
              {uniquePropertyTypes.map((data, idx) => (
                  <option key={data} value={data}>{ data }</option>
              ))}
            </Form.Select>
            <p>{ propertyType }</p>
            </Row>
        </Col>
        
        <Col xs="auto" className="mx-4">
            <Row xs="auto">
            <p className="w-100">Name</p>
            <Form.Select onChange={(e) => setPrice(e.target.value) } value={price}>
              {priceRange.map((data) => (
                  <option key={'$' + data[0] + ' - ' + '$' + data[1]} value={data}>{ '$' + data[0] + ' - ' + '$' + data[1] }</option>
              ))}
            </Form.Select>
            { price }
            </Row>
        </Col>
            
        <Col xs="auto">
        <Button>
            Submit
        </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FilterComp;