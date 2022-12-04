import { Nav } from "react-bootstrap";

const PaginationComp = ({ tilesPerPage, totalTiles, paginate }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalTiles / tilesPerPage); i++){
        pageNumbers.push(i);
    }


    return ( 
        <Nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </Nav>
     );
}
 
export default PaginationComp;