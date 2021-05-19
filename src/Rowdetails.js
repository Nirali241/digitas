import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'

function Rowdetails() {
    return (
        <div style={{marginTop: '5vh'}}>
            <Container>
                <Row>
                <Col>
                <CardGroup >
                    <Card style={{border: 'none'}} >
                        <Card.Body >
                        <Card.Title>Our Products</Card.Title>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-NiC6Z05z8Q_YQbwfJmWY6lIltv-YR2INQ&usqp=CAU" />
                        </Card.Body>
                    </Card>
                    <Card style={{border: 'none', paddingTop: '80px'}}>
                    <Card.Body  >
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
                <Col>
                <CardGroup>
                    <Card style={{border: 'none'}} >
                        <Card.Body >
                        <Card.Title>Recognisition</Card.Title>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqhKDyBcWkfqDdwIhkE0uyM6fyXv7HWNX3g&usqp=CAU" />
                        </Card.Body>
                    </Card>
                    <Card style={{border: 'none', paddingTop: '80px'}}>
                    <Card.Body >
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
            </Container>
        </div>
    )
}

export default Rowdetails
