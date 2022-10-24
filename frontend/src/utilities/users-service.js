import * as usersAPI from "./users-api";

export async function signUp(userData) {
    const response = await usersAPI.signUp(userData);
    const data = response.data;
    localStorage.setItem("data", JSON.stringify(data));
    return response;
}

export const getToken = () => {
    const token = JSON.parse(localStorage.getItem("data"))?.token;
    console.log(token);
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp < Number.parseInt(Date.now() / 1000)) {
        localStorage.removeItem("data");
        return null;
    }
    return token;
};

export const getUser = () => {
    const token = getToken();
  
    return token ? JSON.parse(localStorage.getItem("data")) : null;
  };