import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createBook,
  filterBooks,
  updateBook,
  deleteBook,
  myBooks,
  updateBookStatus,
  getCategoryAnalysis,
  getBooksNamesWithIds,
  myLiveBooksCategoryAnalysis,
  getCategoriesNames,
  getBookById,
} from "../api/book";

import { signUp, login } from "../api/auth";
import { rentBook, returnBook, totalIncome } from "../api/rental";
import { getListOfOwners, updateOwnerStatus, myBalance } from "../api/user";

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

export const useGetBookById = (bookId) => {
  return useQuery({
    queryKey: ["book", bookId],
    queryFn: () => getBookById(bookId),
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

export const useGetCategoryAnalysis = () => {
  return useQuery({
    queryKey: ["categoryAnalysis"],
    queryFn: getCategoryAnalysis,
  });
};

export const useGetBooksNamesWithIds = () => {
  return useQuery({
    queryKey: ["booksNames"],
    queryFn: getBooksNamesWithIds,
  });
};

export const useMyLiveBooksCategoryAnalysis = () => {
  return useQuery({
    queryKey: ["myLiveBooksCategoryAnalysis"],
    queryFn: myLiveBooksCategoryAnalysis,
  });
};

export const useGetCategoriesNames = () => {
  return useQuery({
    queryKey: ["categoriesNames"],
    queryFn: getCategoriesNames,
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

export const useTotalIncome = () => {
  return useQuery({
    queryKey: ["totalIncome"],
    queryFn: totalIncome,
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

export const useMyBalance = () => {
  return useQuery({
    queryKey: ["balance"],
    queryFn: myBalance,
  });
};
