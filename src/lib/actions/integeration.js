"use server";
import { cookies } from "next/headers";
import { randomBytes } from "crypto";

export const whatsAppQr = async () => {
    try {
        const sessionName = randomBytes(8).toString("hex");
        const body = {
            "session_name": sessionName
        }
        const cookieStore = (await cookies()).get("sapien_access_token")
        console.log(cookieStore);
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/whatsapp/register/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${cookieStore.value}`
            },
            body: JSON.stringify(body),
        })

        if (!req.ok) throw new Error("QR code failed")

        const res = await req.json();
        console.log(res);
        return { success: true, data: res };
    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error.message };
        }
        return { error: "An unexpected error occurred", message: String(error) };
    }
}