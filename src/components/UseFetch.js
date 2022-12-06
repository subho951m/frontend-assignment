import { useState, useEffect } from "react";
import DataGenerator from "./DataGenerator";

const UseFetch = () => {
    const [dummyData, setdummyData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = () => {
        setIsLoading(true);
        //Function to create sample fake data
        setdummyData(DataGenerator);
        setIsLoading(false);
      }
  
      fetchData();
    }, []);
    
    return { dummyData, isLoading };
}
 
export default UseFetch;