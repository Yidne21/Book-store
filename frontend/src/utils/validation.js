import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"), // Valid email required
  password: z.string().min(4, "Password must be at least 6 characters"), // Password must be at least 6 characters
});

export const signUpSchema = z
  .object({
    username: z.string().min(3, "Name must be at least 3 characters"), // Name must be at least 3 characters
    email: z.string().email("Invalid email address"), // Valid email required
    password: z.string().min(6, "Password must be at least 6 characters"), // Password must be at least 6 characters
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"), // Confirm password must be at least 6 characters
    location: z.string().min(3, "Location must be at least 3 characters"), // Location must be at least 3 characters
    phone: z
      .string()
      .regex(/^09\d{8}$/, "Invalid phone number should start with 09"), // Phone number must start with 09 and be 10 digits long
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });

export const addBookSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  author: z.string().min(3, "Author must be at least 3 characters"),
});

export const updateBookSchema = z.object({
  quantity: z.string().min(1, "Quantity must be a positive number"),
  rentPrice: z.string().min(1, "Rent price must be a positive number"),
});
