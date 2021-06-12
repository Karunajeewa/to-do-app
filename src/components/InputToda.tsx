import React from 'react';
import {Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const InputToda: React.FC = () => {


    return(
        <Row className="input">
            <InputGroup >
                <FormControl placeholder="What do you do..." aria-describedby="basic-addon2" type="text"/>
                <InputGroup.Append>
                    <Button variant="primary" className="add-button">Add</Button>
                </InputGroup.Append>
            </InputGroup>
        </Row>
    );
}
export default InputToda;

