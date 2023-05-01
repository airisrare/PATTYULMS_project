import http from "../http-common";

class ConceptService {
  //Concept service communicated with out backend functions

  getAll() {
    return http.get("/concepts/gallery");
  }

  postConcept(formData) {
    return http.post("/concepts/gallery", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ConceptService();
