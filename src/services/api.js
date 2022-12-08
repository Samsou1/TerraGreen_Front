import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3000";
const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(({ headers, ...config }) =>
  headers.Authorization || Cookies.get("bearerToken")
    ? {
        ...config,
        headers: {
          ...headers,
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            headers.Authorization || Cookies.get("bearerToken")
          }`,
        },
      }
    : {
        ...config,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }
);

export default class APIManager {
  static async registerUser(payload) {
    try {
      const response = await API.post("/users", payload);
      Cookies.set(
        "bearerToken",
        response.headers.get("Authorization").split(" ")[1]
      );
      Cookies.set("currentUser", JSON.stringify(response.data.user));
      return response;
    } catch {
      throw new Error("Invalid email or password");
    }
  }

  static async loginUser(payload) {
    try {
      const response = await API.post("/users/sign_in", payload);
      Cookies.set(
        "bearerToken",
        response.headers.get("Authorization").split(" ")[1]
      );
      Cookies.set("currentUser", JSON.stringify(response.data.user));
      return response;
    } catch {
      throw new Error("Invalid email or password");
    }
  }

  static async logoutUser() {
    if (Cookies.get("currentUser")) {
      try {
        const response = await API.delete("/users/sign_out", {
          headers: { Authorization: Cookies.get("bearerToken") },
        });
        Cookies.remove("bearerToken");
        Cookies.remove("currentUser");
        return response;
      } catch (err) {
        Cookies.remove("bearerToken");
        Cookies.remove("currentUser");
        console.error(err);
      }
    }
  }

  static async getUser() {
    try {
      const response = await API.get(`/member-data`);
      return response.data.user;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async getAllProjects() {
    try {
      const response = await API.get("/projects");
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async getFilteredProjects(search) {
    try {
      const response = await API.get(`/apartments?search_term=${search}`);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async getMyProjects() {
    try {
      const response = await API.get("/projects?search_term=user");
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async getProject(id) {
    try {
      const response = await API.get(`/projects/${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async deleteProject(id) {
    try {
      const response = await API.delete(`/projects/${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async newProject(payload) {
    try {
      const response = await API.post(`/projects`, payload);
      return response;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async newComment(payload) {
    try {
      const response = await API.post(`/comments`, payload);
      return response;
    } catch (err) {
      console.error(err);
    }
  }

  static async toggleLike(payload) {
    try {
      const response = await API.post(`/likes`, payload);
      console.log(response)
      return response;
    } catch (err) {
      console.error(err);
    }
  }

  static async editProject(id, payload) {
    try {
      const response = await API.put(`/projects/${id}`, payload);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async getCountries() {
    try {
      const response = await API.get("/countries");
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async getRegionsFromCountry(country) {
    try {
      const response = await API.get(`/regions?search_term=${country}`);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async getProjectStatuses() {
    try {
      const response = await API.get("/project_statuses");
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }

  static async getRegions() {
    try {
      const response = await API.get("/regions");
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }
}
