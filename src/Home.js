import React from 'react'
import { Image } from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Image style={{backgroundSize : 'cover', width: '100vw', height: '40vh'}} responsive  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" fluid />
            <div style={{position: 'absolute', backgroundColor: '#000000', opacity: '40%', width: '550px', height: '80px', top: '30%', left: '40%'}}>
            </div>
            <p style={{ position: 'absolute', 
            top: '30%', 
            left: '42%',
            background: 'tranparent',
            color: '#FFFFFF'
            }}>Lorem Ipsum has been the industry's standard dummy
             text ever since  <br></br>  the 1500s,
            when an unknown printer took a galley 
             of type and scrambled<br></br> it to make a type specimen book.</p>
            
        </div>
    )
}

export default Home
