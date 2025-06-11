"use server";
import { LoginSchema, RegisterSchema } from "@/schema/auth";
import { handleError } from "../utils";
import { cookies } from "next/headers";

export const Login = async (data) => {
    const isValidated = LoginSchema.safeParse(data);

    if (!isValidated.success) {
        return {
            error: isValidated.error,
        };
    }
    const { email, password } = isValidated.data;

    try {
        console.log(email, password)
        const body = {
            email: email,
            password: password,
        }
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(body),
        })

        if (!req.ok) throw new Error("Registration failed")

        const res = await req.json();
        console.log(res);

        if (req.ok) {
            const accessToken_expirationTime = new Date();
            accessToken_expirationTime.setSeconds(accessToken_expirationTime.getSeconds() + 24 * 60 * 60 * 1000);
            const refreshToken_expirationTime = new Date();
            refreshToken_expirationTime.setSeconds(refreshToken_expirationTime.getSeconds() + 25 * 60 * 60 * 1000);

            (await cookies()).set("sapien_access_token", res.access, { expires: accessToken_expirationTime, httpOnly: true });
            (await cookies()).set("sapien_refresh_token", res.refresh, { expires: refreshToken_expirationTime, httpOnly: true });

            return { success: true, message: "Login successfully!", data: res };
        }
        return { error: "Invalid credentials!" };
    } catch (error) {
        handleError(error);
    }
    // const res = await fetch("/api/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    // });
    // return res.json();
};

export const Registeration = async (data) => {
    const isValidated = RegisterSchema.safeParse(data);

    if (!isValidated.success) {
        return {
            error: isValidated.error,
        };
    }
    const { email, password, username, phone_number } = isValidated.data;

    try {
        console.log(email, password, username, phone_number);
        const body = {
            email: email,
            password: password,
            username: username,
            phone_number: phone_number
        }
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(body).toString(),
        })

        if (!req.ok) throw new Error("Registration failed")

        const res = await req.json();

        return {
            success: true, message: res.message, data: res.user_id
        }
    } catch (error) {
        handleError(error);
    }
    // const res = await fetch("/api/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    // });
    // return res.json();
};