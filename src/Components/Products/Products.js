import React from 'react'
import { Row, Col, Badge, Card } from 'react-bootstrap'
import Spinner from 'react-spinkit'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Products = (props) => {
    const products = useSelector(state => state.products)

    return (
        <div>
            <Row style={{ marginTop: '40px' }}>
                {!products ?
                    <Spinner name="ball-pulse-sync" color="red" style={{ marginLeft: '600px' }} />
                    :
                    <>
                        {products && products.map(product => (
                            <Col key={product.id} style={{ paddingBottom: '20px' }}>
                                <Card style={{ width: '18rem', backgroundColor: '#343A40', border: '1px solid #343A40' }}>
                                    <Link to={`/details/${product.itemId}`}>
                                        <Card.Img variant="top" height="300px" src={product.files} />
                                    </Link>
                                    <div style={{ display: 'inline', marginTop: '30px' }}>
                                        <Badge variant="secondary" style={{ width: '50px' }}>Game</Badge>
                                        <Badge variant="secondary" style={{ width: '50px', marginLeft: '10px' }}>{product.category}</Badge>
                                        <span style={{ color: 'white', marginLeft: '20px' }}>{product.price} Rwf</span>
                                    </div>

                                    <Link to={`/details/${product.itemId}`}><Card.Text style={{ marginTop: '10px', color: 'white' }}>
                                        {product.title}
                                    </Card.Text>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </>
                }


                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
        </div>
    )
}
