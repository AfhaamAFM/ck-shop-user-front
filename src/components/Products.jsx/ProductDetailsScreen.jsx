import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/PRODUCTS/productAction";

function ProductDetailsScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const showProducts = product.find((p) => p._id === id);

  return (
    <Container>
      <>
        <Link className="btn btn-light my-3" to="/">
          Go back
        </Link>
        {showProducts && (
          <Row>
            <Col md={6}>
              <Image src={showProducts.imageUrl[0].img} fluid />
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <h2>{showProducts.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>4 rating</p>
                </ListGroup.Item>
                <ListGroup.Item>Price: ₹ {showProducts.price}</ListGroup.Item>
                <ListGroup.Item>
                  <strong>Description : </strong>
                  {showProducts.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price</Col>
                      <Col>
                        <h2> ₹ {showProducts.price}</h2>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Stock</Col>
                      <Col>
                        <h2> {showProducts.quantity>0?`${showProducts.quantity} left`:'out of stock'}</h2>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                   <Button className='btn-block' type='button' disabled={showProducts.quantity===0}>
                       Add to cart
                   </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </>
    </Container>
  );
}

export default ProductDetailsScreen;
