import React from 'react';
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Row className="fixed-bottom">
                <Container>
                    <Col className="text-center">
                        <Link to="https://github.com/kano-kenji/games-on-react">© Alexander Tarasevich</Link>
                    </Col>
                </Container>
            </Row>
        </footer>
    );
}

export default Footer;