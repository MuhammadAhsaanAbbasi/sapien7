"use server";
import { BasicDetailSchema, ElevenLabsAPIsSchema, UploadFileSchema } from "@/schema/agent";
import { handleError } from "../utils";
import { cookies } from "next/headers";

export const basicDetailUpdate = async (data) => {
    const isValidated = BasicDetailSchema.safeParse(data);

    if (!isValidated.success) {
        return {
            error: isValidated.error,
        };
    }
    const { name, agent_type, system_instructions, model_name, is_active, is_deleted } = isValidated.data;
    console.log(name, agent_type, system_instructions, model_name, is_active, is_deleted);
    try {
        const body = {
            "name": name,
            "agent_type": "core",
            "system_instructions": system_instructions,
            "model_name": model_name,
            "is_active": is_active,
            "is_deleted": is_deleted
        }
        const cookieStore = (await cookies()).get("sapien_access_token")
        console.log(cookieStore);
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/agents/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${cookieStore.value}`
            },
            body: JSON.stringify(body),
        })

        if (!req.ok) throw new Error("Registration failed")

        const res = await req.json();
        console.log(res);
        return { success: true, message: "Agent's Created", data: res };
    } catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error.message };
        }
        return { error: "An unexpected error occurred", message: String(error) };
    }
}

export const fileUploadUpdate = async (values) => {
    const validatedTypes = UploadFileSchema.safeParse(values);

    if (!validatedTypes.success) {
        return {
            error: validatedTypes.error.issues[0].message,
        };
    }

    const {
        files,
        agent_id,
    } = validatedTypes.data;
    
    try {
        const formData = new FormData();
        formData.append("agent_id", agent_id);            // text field
        files.forEach(file =>
            formData.append("file", file, file.name)        // real File – preserves name & type
        );

        // 3) POST without manually setting Content-Type
        const cookieStore = (await cookies()).get("sapien_access_token")
        console.log(cookieStore);

        const req = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/agent/upload_file/`,
            {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${cookieStore.value}`
                },
                body: formData,
            },

        );

        if (!req.ok) {
            // grab any JSON error detail your API might return
            const res = await req.json().catch(() => ({}));
            console.log(res);
            return {
                error: res.detail || `Upload failed with status ${req.detail}`,
            };
        }

        const res = await req.json();
        console.log("Form submitted successfully!", res);

        // console.log("Form submitted successfully!", body, agent_id);
        return { success: true, message: "Files uploaded successfully!!" };
    }
    catch (error) {
        if (error instanceof Error) {
            return { error: "Invalid credentials!", message: error.message };
        }
        return { error: "An unexpected error occurred", message: String(error) };
    }
}

export const apiKeyUpdate = async (data) => {
    const isValidated = ElevenLabsAPIsSchema.safeParse(data);

    if (!isValidated.success) {
        return {
            error: isValidated.error,
        };
    }
    const { api_key, agent_id } = isValidated.data;
    try {
        // 3) POST without manually setting Content-Type
        const cookieStore = (await cookies()).get("sapien_access_token")
        console.log(cookieStore);
        console.log(api_key, agent_id);

        const body = {
            agent_id: agent_id,
            elevenlabs_api_key: api_key
        }
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/add_elevenlabsapi/`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${cookieStore.value}`
                },
                body: JSON.stringify(body),
            },

        );

        if (!req.ok) {
            // grab any JSON error detail your API might return
            const res = await req.json().catch(() => ({}));
            console.log(res);
            return {
                error: res.detail || `Upload failed with status ${req.detail}`,
            };
        }

        const res = await req.json();
        console.log("Form submitted successfully!", res);

        return { success: true, message: "Agent API Key Updated!!", data: res };
    }
    catch (error) {
        handleError(error)
    }
}