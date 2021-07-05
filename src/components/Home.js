import React from 'react'
import Crousal from './Crousal/Crousal'
import Content from './content/Content'
import Sidebar from './Sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () =>{
    return(
        <Container>  
            <Row md={12} xs={12} lg={12}>
                <Crousal />   
            </Row>
            <Row md={12} xs={12} lg={12}>
                <Col md="2" xs='12'>
                    <Sidebar /> 
                </Col>
                <Col md='10'>                                  
                    <Content product='Laptops' />
                    <Content product='Moniters' />
                </Col>
            </Row>  
        </Container>
    )
}

export default Home