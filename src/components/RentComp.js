import { useState, useEffect } from 'react';
import RentFilterComp from './RentFilterComp';
import { useSearchParams } from 'react-router-dom';
import RentBodyComp from './RentBodyComp';
import UseFetch from './UseFetch';


function RentComp() {

  //Fetching Data
  //We can also pass url to this and make it work
  const { dummyData, isLoading } = UseFetch();

  //for filterComp
  const uniquePlaces = Array.from( new Set( dummyData.map((data) => { return data.place; }) ) );
  const maximumPrice = Math.max(...(dummyData.map((data) => { return Number(data.price.slice(1)); } )) );
  const uniquePropertyTypes = Array.from( new Set( dummyData.map((data) => { return data.property; }) ) );
  
  //filter
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterStatus, setFilterStatus] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterLimit, setFilterLimit] = useState("");
  const [filterType, setFilterType] = useState("");

  const changeSearchParams = (searchQuery) => {
    setSearchParams(searchQuery);
  }

  useEffect(() => {

    //filter function
    const filterFunction = () => {
      if(searchParams.get('filter') === 'active'){
        const location = searchParams.get('location');
        const date = searchParams.get('date');
        const limit = searchParams.get('limit');
        const type = searchParams.get('type');

        setFilterLocation(location);
        setFilterDate(date);
        setFilterLimit(limit);
        setFilterType(type);
      }
    }
    
    filterFunction();
    setFilterStatus(searchParams.get('filter'));
  }, [searchParams]);


  //filter logic
  function validateParameter  (obj, place, availableDate, property, price) {

    let queryDate = new Date(availableDate);

    var priceParts = price.split(' - ');
    var lowerLimit = +priceParts[0].slice(1);
    var upperLimit = +priceParts[1].slice(1);
    var objPrice = +obj.price.slice(1);

    return obj.place===place && obj.property===property && obj.availableDate <= queryDate && lowerLimit <= objPrice && objPrice <= upperLimit ;
  }






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

      {filterStatus==='active'? "The filter is active with following parameters " + filterLocation + "  " + filterDate + " " + filterType + " " + filterLimit : "The filter is inactive"}
      
      <div className="container">
        <RentBodyComp 
        dummyData={ filterStatus === 'active'? dummyData.filter((obj) => validateParameter(obj, filterLocation, filterDate, filterType, filterLimit)) : dummyData }
        ></RentBodyComp>
      </div>
      
    </div>
  );
}

export default RentComp;