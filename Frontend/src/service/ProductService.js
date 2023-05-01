import http from "../http-common";

class ProductService {
  //Product service communicated with out backend functions
  getAll() {
    return http.get("/api/products");
  }

  getProduct(id) {
    return http.get("/api/products/" + id);
  }

  editProduct(id, formData) {
    return http.put("/api/products/" + id, formData);
  }

  deleteProduct(id) {
    return http.delete("/api/products/" + id);
  }

  postProduct(formData) {
    return http.post("/api/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
