import React  from 'react'
import Card from 'react-bootstrap/Card'
import Item from './../Item/Item'
import Row from 'react-bootstrap/Row'
import './Content.css'

const Content = (props) =>{

    return(
            <Card>
                    <Card.Header as="h3" >{props.product}</Card.Header>
                <Card.Body>   
                    <Row md={12} lg={12} xs={12}>
                        <Item Item='Hp'         Price='190000' Specifiction='i5'/>
                        <Item Item='Dell'       Price='270000' Specifiction='i3'/>
                        <Item Item='MAC'        Price='100000' Specifiction='i7'/>
                        <Item Item='Asus'       Price='150000' Specifiction='i2'/>
                        <Item Item='Toshiba'    Price='170000' Specifiction='i4'/>
                    </Row>             
                </Card.Body>
            </Card>           
    )
}

export default Content