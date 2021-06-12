import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const TodoItem: React.FC = () => {
    return(
       <Row className="item">
               <Card className="item-text">
                   <Card.Header as="h5">First task </Card.Header>
               </Card>
                <Button variant="primary" className="item-button">Edit</Button>
                <Button variant="primary" className="item-button">Delete</Button>
       </Row>
    );
}
export default TodoItem;