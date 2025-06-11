import * as z from "zod"

export const LoginSchema = z.object({ 
    email: z.string().email({message: "Invalid email address"}), 
    password: z.string().min(6, {message: "Password must be at least 6 characters"}) 
}) 


export const RegisterSchema = z.object({
    username: z.string().min(3, {message: "Username must be at least 3 characters"}),
    phone_number: z.string().min(10, {message: "Phone number must be at least 10 characters"}),
    email: z.string().email({message: "Invalid email address"}), 
    password: z.string().min(6, {message: "Password must be at least 6 characters"})
})