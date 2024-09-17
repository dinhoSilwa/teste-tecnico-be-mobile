import { SetUpApi } from "./setupApi";

export const useHttp = () => {
  const api = SetUpApi("http://localhost:3000/api/");
  return api;
};
