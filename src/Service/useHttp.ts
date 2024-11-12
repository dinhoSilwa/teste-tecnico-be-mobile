import { createApiInstance } from "./setupApi";

const url = import.meta.env.VITE_API;
// refact url to .env

export const useHttp = () => {
  if (!url) throw new Error("Url base não fornecida ou inválida");

  const api = createApiInstance(url!);
  return api;
};
