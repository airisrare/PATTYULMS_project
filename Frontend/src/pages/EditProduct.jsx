import { React, useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ProductService from "../service/ProductService";

function EditProduct() {
  //Getter and setters for product
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("Edit page for product" + id);
  //Using the Product Service which makes a call to the backend to get one product
  useEffect(() => {
    ProductService.getProduct(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(product);

  function handleEdit() {
    ProductService.editProduct(id, product)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
    navigate("/");
  }

  //This is for handling our changes per input
  //e is our "event" change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <Card className="cardstyle">
      <Card.Header>Edit Product</Card.Header>
      <Card.Body>
        <Form action="Home.jsx">
          <Form.Group>
            <Form.Label className="formLabel">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="Price USD"
              value={product.price}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Gender</Form.Label>
            <Form.Control
              type="text"
              name="gender"
              placeholder="Gender"
              // className="forminputsmall"
              value={product.gender}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          {/* <Form.Group> 
            <Form.Label className="formLabel">Size</Form.Label>
            <Form.Control
              type="text"
              name="size"
              placeholder="Size"
              value={product.size}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group> */}
          <Form.Group>
            <Form.Label className="formLabel">Size</Form.Label>
            <Form.Select
              onChange={(e) => handleInput(e)}
              type="text"
              name="size"
              value={product.size}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Style-ID</Form.Label>
            <Form.Control
              type="text"
              name="styleID"
              placeholder="StyleID"
              // className="forminputsmall"
              value={product.styleID}
              onChange={(e) => handleInput(e)}
            />
            <Form.Text className="text-muted">
              This is how we organize our images, Please start with &emsp;
              Concept-"PRODUCT*NAME*"
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              value={product.description}
              onChange={(e) => handleInput(e)}
            />
            <Form.Text className="text-muted">Any further comments?</Form.Text>
          </Form.Group>

          <br />

          <Form.Group>
            <Form.Label className="formLabel">Main Image</Form.Label>
            <Form.Control
              type="file"
              // value={product.imageURL}
              placeholder="MainImage"
              name="imageURL"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Additional Images</Form.Label>
            <Form.Control
              type="file"
              placeholder="AdditionalImages"
              name="moreImageURLs"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Version</Form.Label>
            <Form.Control
              type="text"
              placeholder="Version"
              value={product.version}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>

          <br />
          <Button className="btncolor" onClick={handleEdit}>
            Submit Edit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default EditProduct;
