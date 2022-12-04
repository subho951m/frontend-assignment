import { useState, useEffect } from "react";
import DataGenerator from "./DataGenerator";

const UseFetch = () => {
    const [dummyData, setdummyData] = useState([]);
    // const [uniquePlaces, setUniquePlaces] = useState([]);
    // const [maximumPrice, setMaximumPrice] = useState(0);
    // const [uniquePropertyTypes, setUniquePropertyTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = () => {
        setIsLoading(true);
        //Function to create sample fake data
        setdummyData(DataGenerator);

        //Values to be displayed in FilterComp
        // setUniquePlaces( new Set( dummyData.map((data) => { return data.place; }) ) );
        // setMaximumPrice( Math.max(...(dummyData.map((data) => { return Number(data.price.slice(1)); } )) ) );
        // setUniquePropertyTypes( new Set( dummyData.map((data) => { return data.property; }) ) );
        setIsLoading(false);
      }
  
      fetchData();
    }, []);
    
    return { dummyData, isLoading };
}
 
export default UseFetch;