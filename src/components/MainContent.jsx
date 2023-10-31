/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MainContent() {
  return (
    <main className='container'>
      <Row data-bs-theme="dark">
        <Col>
        <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src="src/images/leo-self.jpg"  className= "image"/>
      <Card.Body>
        <Card.Title>Featured Artist</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See Famous Artworks</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src="src/images/lady.jpg" className= "image"/>
      <Card.Body>
        <Card.Title>Featured Painting</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See Artist</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src="src/images/our-gallery.jpg" className= "image"/>
      <Card.Body>
        <Card.Title>Our Gallery</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Book a Visit</Button>
      </Card.Body>
    </Card>
        </Col>
    </Row>
    </main>
    
  );
}

export default MainContent;