import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CharacterCard = ({charName, imageSrc, status, species, origin}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{charName}</Card.Title>
        <Card.Text>
          Status: {status} <br />
          Species: {species} <br />
          Origin: {origin}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;