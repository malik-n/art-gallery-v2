import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card>
      <Card.Header>News This Week</Card.Header>
      <Card.Body>
        <Card.Title>13 new paintings acquired. </Card.Title>
        <Card.Text>
        Will be displayed every weekend starting this Saturday.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default Footer;