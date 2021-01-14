import { Link } from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

function NoPageFound() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link className="btn btn-primary btn-lg" to="/">
                                Take Me Home
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NoPageFound;
