import Card from 'react-bootstrap/Card';
import pepe from './assets/pepe.png'



function Carrito() {
  return (
    <Card style={{ width: '50px', height: '50px', display: 'flex'}}>
      <Card.Img variant="top" src={pepe} />
      <Card.Text>0</Card.Text>
    </Card>
  );
}

export default Carrito;