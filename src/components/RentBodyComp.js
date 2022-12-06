import PaginationComp from './PaginationComp';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

const RentBodyComp = ( { dummyData } ) => {
    
    //set page number
    const [currentPage, setCurrentPage] = useState(1);
    //set the number of tiles to be dispalyed per page
    const [tilesPerPage, setTilesPerPage] = useState(11);
  
    //logic of displaying posts in a page
    const indexOfLastTile = currentPage * tilesPerPage;
    const indexOfFirstTile = indexOfLastTile - tilesPerPage;
    const currentDummyData = dummyData.slice(indexOfFirstTile, indexOfLastTile);
  
    
    //change page number
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Date Formatter
    function dateFormat(inputDate) {
        let formattedDate = (inputDate.getDate()) + "-" + (inputDate.getMonth() + 1) + "-" + (inputDate.getFullYear());
        return formattedDate;
    }

    return ( 
        <div className="container">

            <div className="container">
                <Row xs={1} md={3} className="g-4 m-x-5">
                {currentDummyData.map((data) => (
                    <Col key={data.id}>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>{data.price}/month</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{data.name}</Card.Subtitle>
                        <Card.Text>
                            Property Type : {data.property}
                            <br />
                            Location : {data.place}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Available From : {dateFormat(data.availableDate)}</Card.Footer>
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>

            <PaginationComp tilesPerPage={tilesPerPage} totalTiles={dummyData.length} paginate={paginate}></PaginationComp>
        </div>
     );
}
 
export default RentBodyComp;