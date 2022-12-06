import { useState, useEffect } from 'react';
import UseFetch from './UseFetch'
import RentFilterComp from './RentFilterComp';
import { useSearchParams, Outlet } from 'react-router-dom';
import RentBodyComp from './RentBodyComp';


function RentComp() {

  const { dummyData, isLoading } = UseFetch();

  //for filterComp
  const uniquePlaces = Array.from( new Set( dummyData.map((data) => { return data.place; }) ) );
  const maximumPrice = Math.max(...(dummyData.map((data) => { return Number(data.price.slice(1)); } )) );
  const uniquePropertyTypes = Array.from( new Set( dummyData.map((data) => { return data.property; }) ) );
  
  //filter
  const [searchParams, setSearchParams] = useSearchParams();

  const changeSearchParams = (searchQuery) => {
    setSearchParams(searchQuery);
  }


  //display data
  const [displayData, setDisplayData] = useState([]);
  

  useEffect(() => {
    console.log('Filter Property Changes');
    console.log(...searchParams);

    //filter function

    //pass data to display via cards

    //update pagination component

    setDisplayData(dummyData);

    console.log(dummyData);
  }, [searchParams]);

  if(isLoading){
    return <h2 style={{ }}>Loading...</h2>;
  }

  return (
    
    <div className="container">

      <div className="search-filter">
        <RentFilterComp 
        uniquePlaces={uniquePlaces} 
        maximumPrice={maximumPrice} 
        uniquePropertyTypes={uniquePropertyTypes} 
        isLoading={isLoading}
        changeSearchParams={changeSearchParams}
        ></RentFilterComp>
      </div>
      
      <div className="container">
        <RentBodyComp dummyData={dummyData}></RentBodyComp>
      </div>
      
    </div>
  );
}

export default RentComp;