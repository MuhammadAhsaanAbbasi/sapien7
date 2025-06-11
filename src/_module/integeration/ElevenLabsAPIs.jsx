"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ElevenLabsAPIsSchema, UploadFileSchema } from '@/schema/agent';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bot, OctagonPause, Upload } from 'lucide-react';
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form';
import Input from '@/components/Form/Input';
import { apiKeyUpdate, fileUploadUpdate } from '@/lib/actions/agent.action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const elevenLabsAPIs = ({ children, ...props }) => {
    
    const {agentId} = props
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(ElevenLabsAPIsSchema),
        defaultValues: {
            agent_id: agentId,
            api_key: "",
        }
    });

    const onSubmit = async (values) => {
        startTransition(() => {
            apiKeyUpdate(values).then(
                (res) => {
                    if (res?.error) {
                        toast.error("Failed Form", {
                            description: (res?.error),
                            duration: 2000,
                        });
                    }
                    if (res?.success) {
                        toast.success("Success!!", {
                            description: (res?.message),
                            duration: 2000,
                            style: {}
                        });
                        router.push(`/user/${res.data?.user}`);
                    }
                })
                .catch((err) => {
                    toast.error("Event has been created", {
                        description: err.message,
                        duration: 2000,
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    });
                }).
                finally(() => {
                    form.reset();
                })
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='max-w-sm w-full mx-auto space-y-4'>
                <div className='text-center'>
                    <h2 className='text-lg font-medium font-inter'>
                        Connect Our ElevenLabs APIs
                    </h2>
                </div>
                {/* Form */}
                <div className="flex flex-col justify-center items-center gap-6">
                    <FormField
                        control={form.control}
                        name="api_key"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-2 w-full'>
                                <FormLabel htmlFor="agent_id"
                                    className={"flex items-center gap-2 font-normal text-sm font-urbanist"}>
                                    <OctagonPause className="h-4 w-4" />
                                    <span>
                                        ElevenLabs API Keys
                                    </span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        id="agent_id"
                                        placeholder="Type here..."
                                        type="password"
                                        className="w-full" // Added background here
                                        inputClasses="rounded-xl"
                                        disabled={isPending}
                                    // read
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {children}
            </form>
        </Form>
    )
}