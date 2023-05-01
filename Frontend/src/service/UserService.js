import http from "../http-common";

class UserService {
  //Product service communicated with out backend functions
  getAll() {
    return http.get("/users/everyone");
  }

  getUser(id) {
    return http.get("/users/everyone/" + id);
  }

  editUser(id, formData) {
    return http.put("/users/everyone/" + id, formData);
  }

  deleteUser(id) {
    return http.delete("/users/everyone/" + id);
  }

  register(data) {
    return http.post("/users/everyone", data);
  }

  signIn(userData) {
    return http.post("/api/auth/signin", userData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
