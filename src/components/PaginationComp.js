import { Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

const PaginationComp = ({ tilesPerPage, totalTiles, paginate, changeTiles }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalTiles / tilesPerPage); i++){
        pageNumbers.push(i);
    }

    const [tiles, setTiles] = useState('12');


    return ( 
        <Nav className="justify-content-between pt-3">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-end">
                <label className="col-sm-8 col-form-label">Tiles per page :</label>
                <div className="col-sm-5">
                <Form.Select onChange={(e) => {changeTiles(e.target.value); setTiles(e.target.value);}} value={tiles}>
                    <option key="9" value="9">9</option>
                    <option key="12" value="12">12</option>
                    <option key="15" value="15">15</option>
                    <option key="18" value="18">18</option>
                </Form.Select>
                {/* <input type="text" className="form-control" onChange={(e) => changeTiles(e.target.value)}/> */}
                </div>
            </div>
        </Nav>
     );
}
 
export default PaginationComp;