import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Laptop4 from './../../images/lenove.jpg'
import './Item.css'

const Item = (props) =>{

    const image = {
        width:'50%'
    }
    const card1 = {
        width:"13rem"
    }
    const alert2 = () =>{   
            setb("danger")    

    }
    const alert3 = () =>{    
        setb("light")   
    }

    let [b,setb] = useState("light")
    
    return(
        <Card  style={card1} onMouseEnter={alert2} onMouseLeave={alert3} className='cardhover' >                 
            <img src={Laptop4} style={image}/>
        <Card.Body>
            <Card.Title>{props.Item}</Card.Title>
            <Card.Text>
                <ul className='ul'>
                    <li>{props.Specifiction}</li>
                    <li>{props.Price}</li>
                </ul>
                <Button variant={b} ><i className="fa fa-shopping-cart icon"></i></Button>
            </Card.Text>
        </Card.Body> 
    </Card> 
    )
}

export default Item