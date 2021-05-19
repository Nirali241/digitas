import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'

function Coldetails() {
    return (
        <div style={{marginTop: '5vh'}}>
            <Container>
            <Row>
                <Col >
                <CardGroup >
                <Card style={{border: 'none'}}>
                    <Card.Body>
                        <Card.Title>Event</Card.Title>
                        <Card.Text>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Card.Text>
                        <Card.Link href="#">Next</Card.Link>
                        <Card.Link href="#">More info</Card.Link>
                    </Card.Body>
                 </Card>
                <Card style={{borderLeft: 'none',borderTop: 'none',borderBottom: 'none'}}>
                    <Card.Img variant="top" style={{paddingLeft: '5px',width: '250px', height: '200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1Oxly5GNKPFTOqVHXATgxOyVymQ24qukXw&usqp=CAU" />
                    <Card.Body >
                        <Card.Title>Partners</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">More info</Card.Link>
                    </Card.Body>
                    </Card>
                    </CardGroup>
                </Col>
                </Row>
               
                <Row>
                <Col >
                    <CardGroup >
                        <Card style={{border: 'none'}}>
                            <Card.Body>
                                <Card.Title>Speeches</Card.Title>
                                <Card.Text>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </Card.Text>
                                <Card.Link href="#">Next</Card.Link>
                                <Card.Link href="#">More info</Card.Link>
                            </Card.Body>
                        </Card>
                        <Card style={{borderLeft: 'none',borderTop: 'none',borderBottom: 'none'}} >
                            <Card.Body >
                                <Card.Title>Careers</Card.Title>
                                <Card.Text as="li">
                                    <Card.Link  href="#">Some quick example text to build</Card.Link>
                                </Card.Text>
                                <Card.Text as="li">
                                    <Card.Link  href="#">Card title and make up the bulk</Card.Link>
                                </Card.Text>
                                <Card.Text as="li">
                                    <Card.Link  href="#">The card's content.</Card.Link>
                                </Card.Text>
                                
                                <Card.Link  href="#">More info</Card.Link>
                            </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
                </Container>
        </div>
    )
}

export default Coldetails
