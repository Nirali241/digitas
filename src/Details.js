import React from 'react'
import Coldetails from './Coldetails'
import Rowdetails from './Rowdetails'
import Subcontent from './Subcontent'

function Details() {
    return (
        <div style={{ marginTop: '5vh', backgroundColor: '#FFFFFF'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div >
                    <Coldetails />
                </div>
                <div>
                    <Rowdetails />
                </div>
            </div>
            <div style={{marginTop: '5vh'}}>
                <div>
                    <Subcontent />
                </div>
            </div>
        </div>
    )
}

export default Details
