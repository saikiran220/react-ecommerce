import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavHeader from './NavHeader'

const Bread_crumb = ({title}) => {

  return (
    <>
  
    <div className='subheader-block'>
      <Container>
        <Row>
            <Col md={8} className='p-0'>
                <h5>{title}</h5>
            </Col>
            <Col m={4}  className='breadCrumb p-0 text-end'>
                <ul>
                    <li><h5> <Link to='/'>Home</Link> </h5></li>
                    <li><h5>{title}</h5></li>
                </ul>
            </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Bread_crumb
