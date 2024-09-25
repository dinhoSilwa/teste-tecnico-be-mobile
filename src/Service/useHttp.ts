import { SetUpApi } from "./setupApi";

export const useHttp = () => {
  const api = SetUpApi("https://be-mobile-api.onrender.com");
  return api;
};
