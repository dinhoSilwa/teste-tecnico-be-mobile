import axios from "axios";

//more specific name
export const createApiInstance = (baseURL: string) => {
  const api = axios.create({
    baseURL,
    headers: { "Content-Type": "Application/json" },
  });
  return api;
};

// todo 
// adicionar interceptores