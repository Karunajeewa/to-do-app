import React from 'react';
import { Container } from 'react-bootstrap';
import InputTodo from './InputToda';
import Todoitem from './TodoItem';

const TodoBoard: React.FC = () => {
    return(
        <Container fluid={true}>
            <InputTodo/>
            <Todoitem/>
        </Container>
    );
}
export default TodoBoard;