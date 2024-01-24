import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row,Col  } from 'react-bootstrap';
import NavHeader from '../components/NavHeader';

const ProductDetailpage = () => {
    const itemdetail=useParams()
    const apiUrl='https://fakestoreapi.com/products/'
    const [itemDetails,setItemdetails]=useState({})
    useEffect(()=>{fetchData()},[])
    const fetchData=async()=>{
        const response=await axios.get(apiUrl+itemdetail.id)
        setItemdetails(response.data)
    }
  return (
    <div>
          <NavHeader/>
       <Container>
      <Row>
      <Col>
        <h1>item Dex    tails</h1>
        <div>   
        { itemDetails && (<div className='m-2 p-2 bg-light rounded' style={{width:"300px"}}>
          {/* <h3>{itemDetails.id}</h3> */}
          <img className='card shadow m-2' style={{height:'180px', width:'180px'}} src={itemDetails.image} />
          <h6>Item:- {itemDetails.title}</h6>
          <p>Description:- {itemDetails.description}</p>
          <h4>$ {itemDetails.price}</h4>
          <h4>Category:- {itemDetails.category}</h4>
        </div>   
        )}
         </div>
        </Col>
      </Row>
    </Container> 
    </div>
  )
}

export default ProductDetailpage
