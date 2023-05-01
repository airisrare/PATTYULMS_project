import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../pages/page.css";
import { useState } from "react";
import ProductService from "../service/ProductService";
import { useNavigate } from "react-router-dom";

function ProductCreate() {
  //Create a product, use initial null states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [styleID, setStyleID] = useState("");
  const [file, setMainImage] = useState("");
  const [additionalFiles, setAdditionalFiles] = useState("");
  const [version, setVersion] = useState("");

  const navigate = useNavigate();

  //Add form data
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("gender", gender);
    formData.append("size", size);
    formData.append("styleID", styleID);
    formData.append("file", file);
    formData.append("additionalFiles", additionalFiles);
    formData.append("version", version);
    console.log(formData);

    //Post product function found in product service, with data
    ProductService.postProduct(formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <div>
      <h2 className="centerText">Generate Product</h2>
      <Card className="cardstyle">
        <Card.Body>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group>
              <Form.Label className="formLabel">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Price</Form.Label>
              <Form.Control
                type="price"
                placeholder="Price USD"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Gender</Form.Label>
              <Form.Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Gender</option>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Any">Any</option>
                {/* onChange={(e) => setGender(e.target.value)} */}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Size</Form.Label>
              <Form.Select
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option>Size</option>
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
                type="styleID"
                placeholder="StyleID"
                // className="forminputsmall"
                value={styleID}
                onChange={(e) => setStyleID(e.target.value)}
              />
              <Form.Text className="text-muted">
                This is how we organize our images, Please start with &emsp;
                Concept-"CONCEPTNAME"
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Description</Form.Label>
              <Form.Control
                type="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Text className="text-muted">
                Any further comments?
              </Form.Text>
            </Form.Group>

            <br />
            <Form.Group>
              <Form.Label className="formLabel">Main Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="MainImage"
                onChange={(e) => setMainImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Additional Images</Form.Label>
              <Form.Control
                type="file"
                placeholder="AdditionalImages"
                onChange={(e) => setAdditionalFiles(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Version</Form.Label>
              {/* <Form.Control
              type="version"
              placeholder="Version"
              className="forminputsmall"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            /> */}
              <Form.Select
                value={version}
                onChange={(e) => setVersion(e.target.value)}
              >
                <option>version</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
            <br />
            <Button className="btncolor" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCreate;
