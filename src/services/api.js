import axios from "axios";
import Cookies from "js-cookie";

let BASE_URL;
switch (process.env.NODE_ENV) {
  case "production":
    BASE_URL = "https://terra-green.fly.dev/";
    break;
  case "development":
    BASE_URL = "http://localhost:3000";
  default:
    BASE_URL = "http://localhost:3000";
}

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(({ headers, ...config }) =>
  headers.Authorization || Cookies.get("bearerToken")
    ? {
        ...config,
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${
            headers.Authorization || Cookies.get("bearerToken")
          }`,
        },
      }
    : {
        ...config,
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
      }
);

export default class APIManager {
  static async registerUser(payload) {
    try {
      const response = await API.post("/users", payload);
      Cookies.set(
        "bearerToken",
        response.headers.get("Authorization").split(" ")[1],
        { expires: 1 }
      );
      Cookies.set("currentUser", JSON.stringify(response.data.user), {
        expires: 1,
      });
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async loginUser(payload) {
    try {
      const response = await API.post("/users/sign_in", payload);
      Cookies.set(
        "bearerToken",
        response.headers.get("Authorization").split(" ")[1],
        { expires: 1 }
      );
      Cookies.set("currentUser", JSON.stringify(response.data.user), {
        expires: 1,
      });
      return response;
    } catch (err) {
      throw new Error(err);
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
        throw new Error(err);
      }
    }
  }

  static async getUser() {
    try {
      const response = await API.get(`/member-data`);
      return response.data.user;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getNotifications() {
    try {
      const response = await API.get(`/notifications`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getAllProjects() {
    try {
      const response = await API.get("/projects");
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getFilteredProjects(search) {
    try {
      const response = await API.get(`/projects?search_term=${search}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getMyProjects() {
    try {
      const response = await API.get("/projects?search_term=user");
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getProject(id) {
    try {
      const response = await API.get(`/projects/${id}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async deleteProject(id) {
    try {
      const response = await API.delete(`/projects/${id}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async newProject(payload) {
    try {
      const response = await API.post(`/projects`, payload);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async newComment(payload) {
    try {
      const response = await API.post(`/comments`, payload);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async toggleLike(payload) {
    try {
      const response = await API.post(`/togglelike`, payload);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async toggleProjectRegistration(payload) {
    try {
      const response = await API.post(`/toggleprojectregistration`, payload);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async editProject(id, payload) {
    try {
      const response = await API.put(`/projects/${id}`, payload);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async editProfile(payload) {
    try {
      const response = await API.patch(`/member-update`, payload);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getCountries() {
    try {
      const response = await API.get("/countries");
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getRegionsFromCountryID(country) {
    try {
      const response = await API.get(`/regions?search_term=${country}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getProjectStatuses() {
    try {
      const response = await API.get("/project_statuses");
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getRegions() {
    try {
      const response = await API.get("/regions");
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getRegionWithID(id) {
    try {
      const response = await API.get(`/regions/${id}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getCountryWithID(id) {
    try {
      const response = await API.get(`/countries/${id}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async setResetPassword(payload) {
    try {
      const response = await API.post('/users/password', payload);
      return response.data
    }catch (err) {
      throw new Error(err);
  }
  }

  static async setNewPassword(payload) {
    try {
      const response = await API.patch('/users/password', payload);
      return response.data
    }catch (err) {
      throw new Error(err);
  }
  }

  static async deleteUser() {
    try {
      const response = await API.delete("/member-destroy");
      Cookies.remove("bearerToken");
      Cookies.remove("currentUser");
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
}
