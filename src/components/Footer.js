import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer() {
    const styleLink= {
        color: 'inherit',
        textDecoration: 'inherit'
    };

    return (
        <footer>
            <Row className="fixed-bottom">
                <Container>
                    <Col className="text-center">
                        <a style={styleLink} target="blank" href="https://github.com/kano-kenji/games-on-react">© Alexander Tarasevich</a>
                    </Col>
                </Container>
            </Row>
        </footer>
    );
}

export default Footer;