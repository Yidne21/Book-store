import axiosInstance from "./axiosInstance";

export const signUp = async (userData) => {
  const { data } = await axiosInstance.post("/auth/signUp", userData);
  return data;
};

export const login = async (credentials) => {
  const { data } = await axiosInstance.post("/auth/login", credentials);
  // Save the token to localStorage after login
  localStorage.setItem("token", data.token);
  return data;
};
