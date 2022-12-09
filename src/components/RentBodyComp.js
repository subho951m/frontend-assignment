import PaginationComp from './PaginationComp';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const RentBodyComp = ( { dummyData } ) => {
    
    //set page number
    const [currentPage, setCurrentPage] = useState(1);
    //set the number of tiles to be dispalyed per page
    const [tilesPerPage, setTilesPerPage] = useState(12);
  
    //logic of displaying posts in a page
    const indexOfLastTile = currentPage * tilesPerPage;
    const indexOfFirstTile = indexOfLastTile - tilesPerPage;
    const currentDummyData = dummyData.slice(indexOfFirstTile, indexOfLastTile);
  
    
    //change page number
    const paginate = pageNumber => setCurrentPage(pageNumber);
    //set tiles per page
    const changeTiles = tiles => {
        if(tiles===0){
            setTilesPerPage(12);
        }
        else{
            setTilesPerPage(tiles);
        }
    }
        

    //Date Formatter
    function dateFormat(inputDate) {
        let formattedDate = (inputDate.getDate()) + "-" + (inputDate.getMonth() + 1) + "-" + (inputDate.getFullYear());
        return formattedDate;
    }

    //whenever url is changed set pagenuber = 1
    const [urlChange, setUrlChange] = useSearchParams();
    useEffect(() => {
      setCurrentPage(1);
    }, [urlChange]);
    


    //hovering mouse on cards
    const [isHovering, setIsHovering] = useState(-1);

    return ( 
        <div className="container">        
            <Row xs={1} md={3} className="g-4 py-5">
            {currentDummyData.map((data, index) => (
                <Col key={data.id}>
                <Card 
                className={isHovering===index? "shadow" : ""}                    
                role={isHovering===index? "button" : ""}                    
                onMouseEnter={() => setIsHovering(index)} 
                onMouseLeave={() => setIsHovering(-1)}
                >
                    <Card.Img variant="top"  src={require('./images/image_1.jpg')}/>
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
        

            <PaginationComp tilesPerPage={tilesPerPage} totalTiles={dummyData.length} paginate={paginate} changeTiles={changeTiles}></PaginationComp>

            { dummyData.length===0 && <h3>Sorry nothing to display.</h3> }
        </div>
     );
}
 
export default RentBodyComp;