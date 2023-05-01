import React from "react";
import ProductList from "../components/ProductList";

class Home extends React.Component {
  render() {
    return (
      <div className="productCardFlex">
        {/* Home page, listing all products */}
        <ProductList />
      </div>
    );
  }
}

export default Home;
