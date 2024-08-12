import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createBook,
  filterBooks,
  updateBook,
  deleteBook,
  myBooks,
  updateBookStatus,
} from "../api/book";

import { signUp, login } from "../api/auth";
import { rentBook, returnBook } from "../api/rental";
import { getListOfOwners, updateOwnerStatus } from "../api/user";

// Auth Hooks
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
  });
};

// Book Hooks
export const useCreateBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ bookDetails, file }) => createBook(bookDetails, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

export const useFilterBooks = (filters) => {
  return useQuery({
    queryKey: ["books", filters],
    queryFn: () => filterBooks(filters),
  });
};

export const useUpdateBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ bookId, updatedDetails, file }) =>
      updateBook(bookId, updatedDetails, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (bookId) => deleteBook(bookId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

export const useMyBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: myBooks,
  });
};

export const useUpdateBookStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ bookId, status }) => updateBookStatus(bookId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
};

// Rental Hooks
export const useRentBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (bookId) => rentBook(bookId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      queryClient.invalidateQueries({ queryKey: ["myBooks"] });
    },
  });
};

export const useReturnBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (rentalId) => returnBook(rentalId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      queryClient.invalidateQueries({ queryKey: ["myBooks"] });
    },
  });
};

// User Hooks
export const useGetListOfOwners = () => {
  return useQuery({
    queryKey: ["owners"],
    queryFn: getListOfOwners,
  });
};

export const useUpdateOwnerStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ ownerId, status }) => updateOwnerStatus(ownerId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["owners"] });
    },
  });
};
