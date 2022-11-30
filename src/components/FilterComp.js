import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FilterComp() {
  return (
    <Form>
      <Row className="align-items-center justify-content-md-center my-5">
        <Col xs="auto" className="mx-4">
            <Row xs="auto">
            <p className="w-100">Name</p>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            </Row>
        </Col>

        <Col xs="auto" className="mx-4">
            <Row xs="auto">
            <p className="w-100">Name</p>
            <input type="date" />
            </Row>
        </Col>

        <Col xs="auto" className="mx-4">
            <Row xs="auto">
            <p className="w-100">Name</p>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            </Row>
        </Col>

        <Col xs="auto" className="mx-4">
            <Row xs="auto">
            <p className="w-100">Name</p>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            </Row>
        </Col>
            
        <Col xs="auto">
        <Button type="submit" className="m-4 ">
            Submit
        </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FilterComp;