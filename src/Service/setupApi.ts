import axios from "axios"

export const SetUpApi = (baseURL : string) =>{
  const api = axios.create({
    baseURL,
    headers : {"Content-Type" : "Application/json"}
  })
  return api
}