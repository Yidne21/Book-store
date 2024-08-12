import axiosInstance from "./axiosInstance";

export const updateOwnerStatus = async (ownerStatus) => {
  const { data } = await axiosInstance.put(
    "/user/update-owner-status",
    ownerStatus
  );
  return data;
};

export const getListOfOwners = async () => {
  const { data } = await axiosInstance.get("/users/owners");
  return data;
};
