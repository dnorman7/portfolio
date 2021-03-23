import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col} from 'react-bootstrap';



function Hero() {

    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h2>Deanna Norman</h2>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default Hero;