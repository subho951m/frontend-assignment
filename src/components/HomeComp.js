import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function HomeComp({ currentdummyData, loading }) {

  if(loading){
    return <h2 style={{ }}>Loading...</h2>;
  }

  function dateFormat(inputDate) {
    let formattedDate = (inputDate.getDate()) + "-" + (inputDate.getMonth() + 1) + "-" + (inputDate.getFullYear());
    // console.log(inputDate.getDate());
    // console.log(inputDate.getMonth() + 1);
    // console.log(inputDate.getFullYear());
    // console.log(formattedDate);
    return formattedDate;
  }
  

  return (
    <div className="container">
        <Row xs={1} md={3} className="g-4 m-x-5">
        {currentdummyData.map((data) => (
            <Col>
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
  );
}

export default HomeComp;