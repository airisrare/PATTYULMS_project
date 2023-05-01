import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../pages/page.css";
import ConceptService from "../service/ConceptService";
import { useState } from "react";

//Create a concept
function ConceptCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [styleID, setStyleID] = useState("");
  const [file, setMainImage] = useState("");
  const [version, setVersion] = useState("");

  //submit form data
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("styleID", styleID);
    formData.append("file", file);
    formData.append("version", version);
    console.log(formData);

    //add concept function found in concept service
    ConceptService.postConcept(formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="centerText">Generate Concept</h2>

      <Card className="cardstyle">
        <Form.Group className="text-center"></Form.Group>
        <Card.Body>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group>
              <Form.Label className="formLabel">Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Text className="text-muted">
                What will we call this Concept?
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
            <Form.Group>
              <Form.Label className="formLabel">Style-ID</Form.Label>
              <Form.Control
                type="styleID"
                placeholder="StyleID"
                value={styleID}
                onChange={(e) => setStyleID(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Text className="text-muted">
                This is how we organize our images, Please start with &emsp;
                Concept-"CONCEPTNAME"
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label className="formLabel">Main Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="MainImage"
                // value=""
                onChange={(e) => setMainImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Version</Form.Label>
              <Form.Control
                type="version"
                placeholder="Version"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
              />
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

export default ConceptCreate;
