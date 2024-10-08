import axiosInstance from "./axiosInstance";

export const rentBook = async (bookId) => {
  const { data } = await axiosInstance.post(`/rentals/rent/${bookId}`);
  return data;
};

export const returnBook = async (rentalId) => {
  const { data } = await axiosInstance.put(`/rentals/return/${rentalId}`);
  return data;
};

export const totalIncome = async () => {
  const { data } = await axiosInstance.get("/rentals/totalRevenue");
  return data;
};
