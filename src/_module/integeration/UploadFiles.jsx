"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { UploadFileSchema } from '@/schema/agent';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDropzone } from "react-dropzone";
import { Bot, Group, Upload } from 'lucide-react';
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form';
import Input from '@/components/Form/Input';
import { basicDetailUpdate, fileUploadUpdate } from '@/lib/actions/agent.action';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export const uploadFiles = ({ children, ...props }) => {

    const { setActiveStep, agentId } = props

    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(UploadFileSchema),
        defaultValues: {
            agent_id: agentId,
            files: []
        }
    });

    const onSubmit = async (values) => {
        startTransition(() => {
            fileUploadUpdate(values).then(
                (res) => {
                    if (res?.error) {
                        toast.error("Failed Form", {
                            description: (res?.error),
                            duration: 2000,
                        });
                    }
                    if (res?.success) {
                        toast.success("Sended!", {
                            description: (res?.message),
                            duration: 2000,
                            style: {}
                        });
                        setActiveStep("apis")
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
            <form onSubmit={form.handleSubmit(onSubmit)} className='max-w-sm w-full mx-auto'>
                {/* Form */}
                <div className="flex flex-col justify-center items-center gap-6">
                    <FormField
                        control={form.control}
                        name="agent_id"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-2 w-full'>
                                <FormLabel htmlFor="agent_id"
                                    className={"flex items-center gap-2 font-normal text-sm font-urbanist"}>
                                    <Group className="h-4 w-4" />
                                    <span>
                                        Agent ID
                                    </span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        id="agent_id"
                                        value={field.value}
                                        // placeholder="Enter Email here"
                                        className="w-full" // Added background here
                                        inputClasses="rounded-xl"
                                        disabled={true}
                                    // read
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="files"
                        render={({ field }) => {
                            const { value, ...rest } = field;  // drop `value` so it won’t try to render File[]
                            return (
                                <FormItem className={"flex flex-col gap-2 w-full"}>
                                    <FormLabel className={"flex items-center gap-2 font-normal text-sm font-urbanist"}>
                                        <Upload className="h-5 w-5" />
                                        <span>
                                            Upload File Related To Business
                                        </span>
                                    </FormLabel>

                                    <FormControl>
                                        <div
                                            // {...getRootProps()}
                                            className={`
                      border-2 border-dashed rounded-xl 
                      p-8 flex flex-col items-center justify-center
                      bg-[#2a2035] text-gray-300 cursor-pointer`}
                                        >

                                            <Upload className="h-8 w-8 mb-2 text-gray-500" />
                                            <p className="font-medium">
                                                {"Drag and Drop Files"}
                                            </p>
                                            <span className="my-2 text-xs">OR</span>
                                            <Input
                                                {...rest}            // now only name, ref, onBlur remain
                                                type="file"
                                                // multiple={true}
                                                value={undefined} // prevent uncontrolled to controlled error
                                                onChange={e =>
                                                    rest.onChange(e.target.files ? Array.from(e.target.files) : [])
                                                }
                                                disabled={isPending}
                                            />
                                        </div>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )
                        }
                        }
                    />
                </div>
                {children}
            </form>
        </Form>
    )
}