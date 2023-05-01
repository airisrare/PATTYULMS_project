import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ConceptService from "../service/ConceptService";

function ConceptList() {
  //getter and setter -> [] current state on start up is empty
  const [concepts, setConcepts] = useState([]);
  console.log(concepts);

  //runs when component renders -> we can add a dependency array for changes
  //res is actual data coming from api

  useEffect(() => {
    ConceptService.getAll()
      .then((res) => setConcepts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="centerText">
      <h2 className="centerTextWhite">Concepts</h2>
      <p>
        Concepts are just ideas, renders and faux clothing for anyone to look at
      </p>
      {
        //concept - individual array
        concepts.reverse().map((concept) => {
          return (
            <Card className="conceptDisplay" key={concept.title}>
              <Card.Img
                className="conceptImage"
                variant="top"
                src={concept.imageURL}
                // style={{ width: "40rem", height: "55rem" }}
              />
              <Card.Body>
                <Card.Title>Title: {concept.title}</Card.Title>
                <Card.Text>Description: {concept.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })
      }
    </div>
  );
}

export default ConceptList;
