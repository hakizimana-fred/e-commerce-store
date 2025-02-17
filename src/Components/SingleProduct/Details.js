import React, {useEffect, useState} from 'react';
import { Button, Container, Row, Col, Image} from 'react-bootstrap'
import Navigationbar from '../Navbar/Navbar'
import { db } from '../../Configurations'
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'


function Details() {
const dispatch = useDispatch()
const { id } = useParams();
const [products, setProd] = useState("");

function handleSubmit(name, price){
       dispatch({
           type: 'CHANGE_NAME',
           payload: {"name": name, "price":price}
       })
   }

useEffect(()=>{

const docRef = db.collection("Products").doc(id);

docRef.get().then((doc) => {
    if (doc.exists) {

        setProd(doc.data())
    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
})
});



//console.log(products.description);
  return(
    <>
    <Navigationbar />

    <Container style={{marginTop: '20px'}}>

    <Row style={{marginTop: '40px'}}>
      <Col>
      <Image src={products.files} thumbnail width={600}/>
      </Col>
      <Col>
      <Container>
      <h4 style={{ color: 'white'}}>{products.name}</h4>
      <p style={{ color: 'white'}}>Category by: <span style={{color: 'red'}}>{products.category}</span></p>
      <p style={{ color: 'white'}}>Price: <span style={{color: 'red'}}>{products.price}$</span></p>

      <Button style={{backgroundColor: 'red', border: 'solid 1px red'}} onClick={handleSubmit(products.name, products.price)}>Add to Cart </Button>
      </Container>
      </Col>
    </Row>
    <div style={{marginTop: '20px', color: 'white'}}>
    {products.description}
    </div>

  </Container>
    </>
  );
}

export default Details;
