import { useState, useEffect } from "react";
import DataGenerator from "./DataGenerator";

const UseFetch = () => {
    const [dummyData, setdummyData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    //We create this as Universal Fetch hook
    //We can just provide a url as an input to this function and it would fetch data from source
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