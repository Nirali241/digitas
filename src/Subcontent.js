import React from 'react'
import { Card, Container,  Button, Col, Row } from 'react-bootstrap'

function Subcontent() {
    return (
        <div className="Subcontent"  >
            <Container>
            
                    <Button >Press Release</Button>
                    <Button  variant="light">Media Coverage</Button>
                    <Card>
                        <Card.Body>
                            <Card.Title>Event</Card.Title>
                            <Card.Text>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Card.Text>
                            <Card.Text>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Card.Text>
                           
                            <Card.Link href="#">Next</Card.Link>
                            <Card.Link href="#">More info</Card.Link>
                        </Card.Body>
                    </Card>
               
            </Container>
            <div style={{marginTop: '10vh'}}>
            <Row>
                <Col></Col>
            </Row>
            </div>
        </div>
    )
}

export default Subcontent
