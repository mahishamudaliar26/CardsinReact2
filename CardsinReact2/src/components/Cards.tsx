import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';


function Cards() {
  return (
    <Card style={{ width: '50rem',height:'50rem', backgroundColor:'white', borderRadius:'2rem'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
      <Form>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Here..."
          aria-label="Search Here"
          aria-describedby="basic-addon2"
         
        />
        <InputGroup>
          {/* <Button variant="outline-secondary"> */}
            <FaSearch />
          {/* </Button> */}
        </InputGroup>
      </InputGroup>
    </Form>
    </Card>
    
    
  );
}

export default Cards;