import {Container, Row} from "react-bootstrap";
import SnakeGame from "../games/SnakeGame";

function Snake() {
    return (
        <Container>
            <Row className="justify-content-center p-4">
                <h1>Snake Game</h1>
            </Row>
            <SnakeGame />
        </Container>
    );
}

export default Snake;
