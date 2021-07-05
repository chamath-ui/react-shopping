import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './Sidebar.css'


const Sidebar1 = () =>{
    return(
        <div>
            <ListGroup className='sticky1'>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    )
}

export default Sidebar1