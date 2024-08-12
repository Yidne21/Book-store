// api/bookApi.js
import axiosInstance from "./axiosInstance";

export const createBook = async (bookDetails, file) => {
  const formData = new FormData();
  formData.append("title", bookDetails.title);
  formData.append("author", bookDetails.author);
  formData.append("publishedDate", bookDetails.publishedDate);
  formData.append("file", file);

  const { data } = await axiosInstance.post("/books", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const filterBooks = async (filters) => {
  const { data } = await axiosInstance.get("/books", { params: filters });
  return data;
};

export const updateBook = async (bookId, updatedDetails, file) => {
  const formData = new FormData();
  formData.append("title", updatedDetails.title);
  formData.append("author", updatedDetails.author);
  formData.append("publishedDate", updatedDetails.publishedDate);
  if (file) {
    formData.append("file", file);
  }

  const { data } = await axiosInstance.put(`/books/${bookId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deleteBook = async (bookId) => {
  const { data } = await axiosInstance.delete(`/books/${bookId}`);
  return data;
};

export const myBooks = async () => {
  const { data } = await axiosInstance.get("/books/my-books");
  return data;
};

export const updateBookStatus = async (bookId, status) => {
  const { data } = await axiosInstance.put(`/books/${bookId}/status`, {
    status,
  });
  return data;
};
