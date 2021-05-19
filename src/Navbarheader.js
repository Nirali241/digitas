import React from 'react'
import { Form, FormControl, Nav } from 'react-bootstrap'

function Navbarheader() {
    return (
        <div>
            
            <Nav className="navbar navbar-expand-lg navbar-light bg-light px-4 bg-white fixed-top">
            <div className="container-fluid ">
               
                <a className="navbar-brand fs-4" href="#"><strong>Company </strong><span className="text-primary">logo</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 text-center">
                    <li >
                    <Nav.Item>
                    <Nav.Link className="nav-link active text-primary" href="#">Welcome guest</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li >
                    <Nav.Item>
                    <Nav.Link eventKey="link-1" href="#">Login</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li >
                    <Nav.Item>
                    <Nav.Link eventKey="link-2" href="#">Contact Us</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li >
                    <Nav.Item>
                    <Nav.Link eventKey="link-2" href="#">Resource Center</Nav.Link>
                    </Nav.Item>
                
                    </li>
                    <li>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        
                    </Form>
            
                    </li>
                </ul> 
               
                </div>
                
            </div>

            </Nav>
            <br /><br /><br />
            <Nav className="navbar navbar-expand-lg navbar-light  border-bottom mr-auto " style={{backgroundColor: '#0b408a'}}>
            <div className="container "  variant="dark">
               
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav  mb-lg-0 fs-6 text-center  ">
                    <li >
                    <Nav.Item>
                    <Nav.Link className="nav-link text-light" href="#">Home</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li className="px-4 " >
                    <Nav.Item>
                    <Nav.Link eventKey="link-1 " href="#">Overview</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li className="px-4">
                    <Nav.Item>
                    <Nav.Link eventKey="link-2" href="">Who We Are</Nav.Link>
                    </Nav.Item>
                    </li>
                    <li className="px-4">
                    <Nav.Item>
                    <Nav.Link eventKey="link-3" href="#">What We Do</Nav.Link>
                    </Nav.Item>
                     </li>
                     <li className="px-4">
                    <Nav.Item>
                    <Nav.Link eventKey="link-4"  href="#">How We Do It</Nav.Link>
                    </Nav.Item>
                     </li>
                     <li className="px-4">
                    <Nav.Item>
                    <Nav.Link eventKey="link-5" href="#">Why DigitasLBi</Nav.Link>
                    </Nav.Item>
                     </li>
                     <li className="px-4">
                    <Nav.Item>
                    <Nav.Link eventKey="link-6" href="#">Global Reach</Nav.Link>
                    </Nav.Item>
                     </li>
                </ul> 
                </div>
            </div>
            </Nav>
          
            
            
        </div>
    )
}

export default Navbarheader