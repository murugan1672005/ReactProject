import axios from "axios";

const api_uri = "http://localhost:3000";

export const registerUser = async (data) => {
    const response = await axios.get(`${api_uri}/users`);
    const existingUsers = response.data;
    const maxId = Math.max(...existingUsers.map(user => user.id), 0);
    const id = maxId + 1;
    const userData = { ...data, id: id };
    await axios.post(`${api_uri}/users`, userData);
}

export const loginUser = async (data) => {
    const response = await axios.get(`${api_uri}/users`, {
        params: {
            email: data.email,
            password: data.password
        }
    });
    const user = response.data[0];
    return !!user;
}