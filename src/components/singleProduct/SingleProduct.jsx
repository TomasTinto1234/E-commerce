import React, {useState, useEffect} from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
// import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router'
import {  useParams } from 'react-router-dom'
import AllProducts from "../../products"

 
 const SingleProduct = (props) => {
    const { onAdd } = props;
    // console.log(products)
    const { id } = useParams(AllProducts);
    const [product, setProduct] = useState({})
    const [carrito, setCarrito] = useState([])
    const { title, category, image, price, description} = product
    
    const agregarAlCarrito = (item) => {
       setCarrito( [...carrito, item] )
     }

     useEffect(()=>{
        getProductId(id)
     },[id])


     const getProductId = async (id) => {
        await fetch(`https://fakestoreapi.com/products/${id}`)
           .then((res) => res.json())
           .then((json) => {
             console.log(json)
             setProduct(json);
           })
           .catch((err) => {
             console.log(err);
           });
       };    

    const navigate = useNavigate()
    //const handleBack = () => {
    //    navigate(-1) 
    //}

    const handleToIndex = () => {
        navigate('/')
    }
    
    return (
        <>
            <Row>
                <Col className="mt-4">                    
                    <Button className="btn btn-info text-white" onClick={handleToIndex}>Back Home</Button>
                </Col>
            </Row>
            <Card className="mt-3">
                <Card.Header as="h5" className="text-muted card-header">
                    {title}
                    <Card.Text className="text-muted">                          
                        <small> {category} </small>
                    </Card.Text>
                </Card.Header>

                <Card.Body className='card-detalle' >
                    <Row>
                    <Col xs={6}>
                        <Image src={image} height="300"  />
                        <p className='ingredientes'>Information</p>
                        <Card.Text> {description} </Card.Text>
                        {/* <p>Rating : {rating} </p> */}
                    </Col>

                    <Col className='link-compra'>
                        <Card.Title className="text-info">Price: $ {price}</Card.Title>
                        {/* <div className="d-flex mb-0">
                        <Card.Text className="me-2 mb-0 d-end">
                            rating: {rating[rate]}
                        </Card.Text>
                        </div> */}
                        <Row className="mt-4">
                        <Col xs={10} >
                        <div>
        <button onClick={()=>{onAdd(id)}}>Add To Cart</button>
      </div>
                          <Button onClick={() =>{agregarAlCarrito(id)}}>agregar al carrito</Button>
                        </Col> 
                        </Row>
                    </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                <marquee className="text-dark" >
                    - E-COMMERCE Tomas Tinto - <a href="https://porfolio-8sla.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a> - Entra a mi portfolio para mas proyectos - <a href="https://porfolio-8sla.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a> . 
                  </marquee>
                </Card.Footer>
            </Card>
        </>
    )
}

export default SingleProduct