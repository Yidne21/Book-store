import axiosInstance from "./axiosInstance";

export const signUp = async (userData) => {
  const { data } = await axiosInstance.post("/auth/signUp", userData);
  return data;
};

export const login = async (credentials) => {
  const { data } = await axiosInstance.post("/auth/login", credentials);
  localStorage.setItem("token", data.token);
  return data;
};
