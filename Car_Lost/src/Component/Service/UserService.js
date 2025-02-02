import axios from "axios";

class UserService {
    static BASE_URL = "http://localhost:8080";

    static getToken() {
        return localStorage.getItem("token");
    }

    static async refreshToken() {
        try {
            const token = UserService.getToken();
            if (!token) throw new Error("No token available for refresh");

            const response = await axios.post(`${UserService.BASE_URL}/auth/refresh`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            const newToken = response.data.token;
            localStorage.setItem("token", newToken);
            return newToken;
        } catch (error) {
            console.error("Token refresh failed:", error);
            UserService.logout();
            window.location.href = "/login";
        }
    }

    static async makeAuthorizedRequest(method, url, data = null) {
        let token = UserService.getToken();
        if (!token) {
            throw new Error("Unauthorized! No token found.");
        }

        try {
            const response = await axios({
                method,
                url: `${UserService.BASE_URL}${url}`,
                data,
                headers: { 
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 403) {
                console.warn("Token expired, trying to refresh...");
                try {
                    token = await UserService.refreshToken();
                    return axios({
                        method,
                        url: `${UserService.BASE_URL}${url}`,
                        data,
                        headers: { Authorization: `Bearer ${token}` }
                    }).then((res) => res.data);
                } catch (refreshError) {
                    console.error("Token refresh failed, logging out...");
                    UserService.logout();
                    window.location.href = "/login";
                }
            }
            throw error;
        }
    }

    static async login(email, password) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/login`, { email, password });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    }

    static async register(userData) {
        try {
            const response = await axios.post(`${UserService.BASE_URL}/auth/register`, userData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(userData);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    }
    
    static async getAllUsers() {
        return await UserService.makeAuthorizedRequest("get", "/admin/get-all-users");
    }

    static async getProfile() {
        return await UserService.makeAuthorizedRequest("get", "/adminuser/get-profile");
    }

    static async getUserById(userId) {
        return await UserService.makeAuthorizedRequest("get", `/admin/get-user/${userId}`);
    }

    static async deleteUser(userId) {
        return await UserService.makeAuthorizedRequest("delete", `/admin/delete/${userId}`);
    }

    static async updateUser(userId, userData) {
        return await UserService.makeAuthorizedRequest("put", `/admin/update/${userId}`, userData);
    }

    /** Authentication Methods */
    
    static logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    }

    static isAuthenticated() {
        return !!UserService.getToken();
    }

    static isAdmin() {
        return localStorage.getItem("role") === "ADMIN";
    }

    static isUser() {
        return localStorage.getItem("role") === "USER";
    }

    static adminOnly() {
        return UserService.isAuthenticated() && UserService.isAdmin();
    }
}

export default UserService;
