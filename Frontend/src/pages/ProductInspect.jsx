import { React, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ProductService from "../service/ProductService";
import { Link, useParams, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

//This is the product inspect page when a User clicks on a product
function ProductInspect() {
  //Getter and setters for product
  const [product, setProduct] = useState([]);
  //index is for images, starting at the first image
  const [index, setIndex] = useState(0);
  //Handling selected images for our index and setting the index
  const handleImageSelected = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  //Use Params returns an object of key/value pairs of the dynamic params
  //from the current URL that were matched by the route path.
  //In our case, we are using the ID, we log it
  const { id } = useParams();
  console.log("this page is for product" + id);

  //Using the Product Service which makes a call to the backend to get one product
  useEffect(() => {
    ProductService.getProduct(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const navigate = useNavigate();
  //Set user state to not signed in
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //get token from local computer storage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  //Delete product function found in the product service
  function handleDelete() {
    ProductService.deleteProduct(id)
      .then(() => {
        setProduct({});
        alert("Product was deleted");
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => console.log(error).alert("Error deleting Product"));
  }

  return (
    <Container className="containerInspect">
      <Row>
        <Col className="d-flex align-items-center">
          {/* This takes the active index(image), and on select we call the handle image method */}
          <Carousel activeIndex={index} onSelect={handleImageSelected}>
            {/* Image item on our carousel */}
            <Carousel.Item>
              <img
                className="inspectPhoto"
                src={product && product.imageURL}
                alt="First slide"
              />
            </Carousel.Item>
            {/* Second image */}
            <Carousel.Item>
              <img
                className="inspectPhoto"
                src={product && product.moreImageURLs}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="d-flex align-items-center">
          <div className="inspectText">
            <h2>{product && product.title}</h2>
            <br />
            <Form>
              <Form.Group>
                <Form.Label>
                  Description: {product && product.description}
                </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>Gender: {product && product.gender} </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>Price: ${product && product.price} </Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Label>Size: {product && product.size}</Form.Label>
              </Form.Group>
              <br></br>
              {isAuthenticated && (
                <>
                  <Button variant="danger" onClick={handleDelete}>
                    Delete
                  </Button>
                  <Link to={`/editProduct/${product.productID}`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </>
              )}
              <Link to={`/checkout`}>
                <Button>Checkout</Button>
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ProductInspect;

// Documentation for bootstrap carousel image rotation
// https://react-bootstrap.github.io/components/carousel/
