import { useParams } from "react-router-dom";

const ResourceComp = () => {
    const { id } = useParams();

    return ( 
        <h1>Resource!!! { id }</h1>
     );
}
 
export default ResourceComp;