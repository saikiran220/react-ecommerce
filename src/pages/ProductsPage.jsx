import React, { useEffect, useState } from 'react'
import NavHeader from '../components/NavHeader'
import Bread_crumb from '../components/Bread_crumb'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ProductsPage = () => {
  const[productsData,setProductsData]=useState({});
  const [searchText, setSearchText] = useState("");

  const productsApi='https://fakestoreapi.com/products'
  useEffect(()=>{fetchProduct()},[])
  const fetchProduct=async()=>{
    const response=await axios.get(productsApi)
    setProductsData(response.data)
    console.log('response',response)
  }  
  const handleCart=(cartdata)=>{
    console.log("cartdata",cartdata)
   
  }   
const handleChange=(cartProduct)=>{
  console.log(cartProduct)
  setProductsData(cartProduct)

}
const handleSearch= (e) => {
  setSearchText(e.target.value);
  console.log('event', e)
};

  
  return (
    <div>
      <NavHeader/>
      <Bread_crumb title={'Products'}/>
      <div>
        <Container>
          <Row>
            <Col>
            <div style={{fontFamily:"fantasy ", textAlign:"center", fontWeight:"bolder"}}>
              <h4>All products</h4>
            </div>
            <input type="text" className="form-control " placeholder='search' name='searchText' value={searchText} onChange={handleSearch} />
            </Col>
          </Row>
          <Row>
            <Col>
            <div className='d-flex flex-wrap'>
            {productsData.length>0 && productsData.filter(items=>{
              return items.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 
            }) .map((items,index)=>{

              const {id}=items
              return(
               <div key={index} className='m-2 p-2 bg-light rounded' style={{width:"300px"}} >
                <p>{items.id}</p>
                <img key={index} style={{height:'180px', width:'180px'}} className='card shadow m-2' src={items.image} />
                <h5 className='m-1'>{items.title}</h5>
                <div className='d-flex justify-content-between align-items-center'>
                      <h5 className='m-1'>$ {items. price}</h5>
                      <Link to={`/products/${id}`} onClick={()=>handleChange(items.id)} className='bg-dark text-white p-2 rounded '>view more</Link>
                     
                      <i className='bg-dark text-white p-2 rounded ' onClick={handleCart}><FaShoppingCart/></i> 
                </div>
               </div>
              )
            })}
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ProductsPage
