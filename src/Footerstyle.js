import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

function Footerstyle() {
    return (
        <div style={{width: '100%', backgroundColor: '#D3D3D3', marginTop: '5vh'}}>
            <Container fluid>
            <Row>
                <CardGroup >
                <Card >
                    <Card.Body style={{backgroundColor: '#D3D3D3'}} >
                        <Card.Title>About</Card.Title>
                        <Card.Text> 
                            Vision & Mission <br/>
                            Thought Leadership<br/>
                            Partners <br/>
                            Events <br/>
                            Press Room <br/>
                            Careers <br/>
                            Awards Recognition 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                
                <Card >
                    <Card.Body style={{backgroundColor: '#D3D3D3'}} >
                        <Card.Title>Training</Card.Title>
                        <Card.Text> 
                        Talent Management <br />
                        Tarining & Development <br />
                        Coaching <br />
                        Salesforce Enablement <br />
                        SPS Overview <br />
                        Readiness <br />
                        Development  
                        </Card.Text>
                        </Card.Body>
                    </Card>
                
                <Card >
                    <Card.Body style={{backgroundColor: '#D3D3D3'}} >
                        <Card.Title>Resources</Card.Title>
                        <Card.Text> 
                        E-store <br />
                        Nano Sales Books <br />
                        Tools <br />
                        Books <br />
                        WebCasts <br />
                        Cyber Sales Tips 
                        </Card.Text>
                        </Card.Body>
                    </Card>
               
                <Card >
                    <Card.Body style={{backgroundColor: '#D3D3D3'}} >
                        <Card.Title>Global Reach</Card.Title>
                        <Card.Text> 
                        North America <br />
                        South America <br />
                        Europe, Middle-east <br />
                        Africa Headquarters <br />
                        Asia Pacific 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                
                <Card >
                    <Card.Body style={{backgroundColor: '#D3D3D3'}} >
                        <Card.Title>Share</Card.Title>
                        <Card.Text> 
                        Facebook <br />
                        Twitter <br />
                        Linkedin <br />
                        Blog <br />
                        E-mail 
                        </Card.Text>
                        </Card.Body>
                    </Card>
                
                </CardGroup> 
            </Row>
            <Row style={{backgroundColor: '#FFFFFF'}}>
                
                <Col>Terms of use</Col>
                <Col>Privacy policy</Col>
                <Col>Legal Notice</Col>
                <Col>Sitemap</Col>
            </Row>
            </Container>
        </div>
    )
}

export default Footerstyle
