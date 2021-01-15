import React from 'react';
import {Col, Row} from "react-bootstrap";

function Footer() {
    const styleLink = {
        color: 'inherit',
        textDecoration: 'inherit'
    };

    return (
        <footer>
            <Row className="fixed-bottom">
                <Col className="text-center">
                    <a style={styleLink} target="blank" href="https://github.com/kano-kenji/games-on-react">
                        &copy; Alexander Tarasevich
                    </a>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;