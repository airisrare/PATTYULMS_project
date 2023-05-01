import { React, useEffect, useState } from "react";
import ProductService from "../service/ProductService";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductList() {
  //Getter and setter -> [] array is empty on startup
  const [products, setProducts] = useState([]);
  console.log(products);

  //runs when component renders -> we can add a dependency array for changes
  //res is actual data coming from api
  //res.data
  useEffect(() => {
    ProductService.getAll()
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="productCardFlex">
      {/* <h2>Products</h2> */}
      {products.map((product) => {
        return (
          <div key={product.title}>
            <Link
              to={`/productInspect/${product.productID}`}
              className="colorLink"
              //onClick={() => handleCardClick(product)}
            >
              {/* onClick={handleEvent} */}
              <Card className="productCardDisplay">
                <Card.Img
                  variant="top"
                  src={product.imageURL}
                  style={{ width: "20rem", height: "35rem" }}
                />
                <Card.Body>
                  <Card.Title>Title: {product.title}</Card.Title>
                  <Card.Text>Size: {product.size}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
