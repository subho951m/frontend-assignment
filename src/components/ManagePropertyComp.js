import { useParams } from "react-router-dom";

const ManagePropertyComp = () => {
    const { id } = useParams();
    return ( 
        <h1>Manage Property!!! { id }</h1>
     );
}
 
export default ManagePropertyComp;