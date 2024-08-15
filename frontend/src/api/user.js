import axiosInstance from "./axiosInstance";

export const updateOwnerStatus = async (ownerId, status) => {
  const { data } = await axiosInstance.put(`/users/approve/${ownerId}`, {
    status,
  });
  return data;
};

export const getListOfOwners = async () => {
  const { data } = await axiosInstance.get("/users/owners");
  return data;
};

export const myBalance = async () => {
  const { data } = await axiosInstance.get("/users/balance");
  return data;
};

export const deleteOwner = async (ownerId) => {
  const { data } = await axiosInstance.delete(`/users/delete/${ownerId}`);
  return data;
};
