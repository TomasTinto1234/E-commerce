import React, {useState, useEffect} from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
// import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router'
import {  useParams } from 'react-router-dom'
import AllProducts from "../../products"
import Marquee from "../Marquee/Marquee"
import {
    BsCart4,
    BsHouse
  } from "react-icons/bs";

 
 const SingleProduct = (props) => {
    const { onAdd } = props;
    // console.log(products)
    const { id } = useParams(AllProducts);
    const [product, setProduct] = useState({})
    const [carrito, setCarrito] = useState([])
    const { title, category, image, price, description} = product
  const navigate = useNavigate()
    
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
                <Button className="btn" onClick={handleToIndex}><span>Back<BsHouse color="black"
                size="35px"
                cursor="pointer"/></span></Button>
                </Col>
            </Row>
            <Card className="mt-3">
                <Card.Header as="h5" className="text-muted card-header">
                    {title}
                    <Card.Text className="text-muted">                          
                        <small> {category} </small>
                    </Card.Text>
                </Card.Header>

                <Card.Body  >
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
                        <button
                              className="btn"
                              onClick={() => {
                                onAdd(product);
                                
                              }}
                            >
                              <span>Add To <BsCart4 color="black"
                size="30px"
                cursor="pointer"/></span>
                            </button>
      </div>
                        </Col> 
                        </Row>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
               <div>
               <Marquee/>
               </div>
               
        </>
    )
}

export default SingleProduct