"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { BasicDetailSchema } from '@/schema/agent';
import { zodResolver } from '@hookform/resolvers/zod';
// import { Input } from '@mui/material';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Group, UserCog } from 'lucide-react';
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form';
import Input from '@/components/Form/Input';
import { basicDetailUpdate } from '@/lib/actions/agent.action';
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { toast } from 'sonner';

export const models = [
    "gpt-4o",
    "chatgpt-4o-latest",
    "gpt-4o-mini",
    "gpt-4o-audio-preview",
    "gpt-4o-audio-preview-2024-12-17",
    "gpt-4o-audio-preview-2024-10-01",
    "gpt-4o-mini-audio-preview",
    "gpt-4o-mini-audio-preview-2024-12-17",
    "gpt-4.1",
    "gpt-4.1-mini",
    "gpt-4.1-nano",
    "gpt-3.5-turbo",
    "gpt-3.5-turbo-16k",
    "gpt-4",
    "gpt-4-32k",
    "gpt-4-1106-preview",
    "gpt-4-0125-preview",
    "gpt-4-turbo-2024-04-09",
    "gpt-4-turbo",
    "gpt-4.5-preview-2025-02-27",
    "gpt-4.5-preview",
    "o1",
    "o1-2024-12-17",
    "o1-preview",
    "o1-mini",
    "o3-mini",
    "o3",
    "o4-mini",
    "gpt-3.5-turbo-instruct"
]


export const BasicDetails = ({ children, ...props }) => {

    const { setActiveStep, setAgentId } = props

    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(BasicDetailSchema),
        defaultValues: {
            name: "",
            agent_type: "",
            system_instructions: "",
            model_name: "",
            is_active: false,
            is_deleted: false
        }
    });

    const onSubmit = async (values) => {
        startTransition(() => {
            basicDetailUpdate(values).then(
                (res) => {
                    if (res?.error) {
                        toast.error(res.error, {
                            description: (res?.message),
                            duration: 2000,
                        });
                    }
                    if (res?.success) {
                        toast.success("Sended!", {
                            description: (res?.message),
                            duration: 2000,
                            style: {}
                        });
                        setActiveStep("upload");
                        setAgentId(res?.data?.id);
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
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-10">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-2'>
                                <FormLabel htmlFor="assistant_name"
                                    className={"flex items-center gap-2 font-normal text-sm font-urbanist"}>
                                    <UserCog className="h-4 w-4" />
                                    <span>
                                        Assistant Name
                                    </span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        id="assistant_name"
                                        placeholder="Enter Assitant Name here"
                                        className="w-full form_input" // Added background here
                                        inputClasses="rounded-xl"
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="agent_type"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-2'>
                                <FormLabel htmlFor="agent_type"
                                    className={"flex items-center gap-2 font-normal text-sm font-urbanist"}>
                                    <Group className="h-4 w-4" />
                                    <span>
                                        Agent Type
                                    </span>
                                </FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                                        <SelectTrigger className="form_input w-full">
                                            <SelectValue placeholder="Select agent type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="openai">Open AI Agent</SelectItem>
                                            <SelectItem value="custom">Custom Agent</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="system_instructions"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-2'>
                                <FormLabel htmlFor="system_instruction"
                                    className={"flex items-center gap-2 font-normal text-sm font-urbanist"}>
                                    <PiShoppingBagOpenBold className="h-4 w-4" />
                                    <span>
                                        System Instruction
                                    </span>
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Textarea {...field}
                                            placeholder="Type here..."
                                            className="form_input !h-[120px]"
                                            // rows={80}
                                            cols="30"
                                            disabled={isPending}
                                        />
                                        {/* <textarea name="" id="" cols="30" rows="10" className='bg-yellow-400'></textarea> */}
                                        {/* <Edit3 className="absolute bottom-2 right-2 h-4 w-4 text-gray-500" /> */}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="model_name"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-2'>
                                <FormLabel htmlFor="model"
                                    className={"flex items-center gap-2 font-normal text-sm font-urbanist"}>
                                    <FaReact className="h-4 w-4" />
                                    <span>
                                        Model Name
                                    </span>
                                </FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}
                                        disabled={isPending}
                                    >
                                        <SelectTrigger className="form_input w-full">
                                            <SelectValue placeholder="Select model" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                models.map((model, index) => (

                                                    <SelectItem value={model} key={index}>
                                                        {model}
                                                    </SelectItem>
                                                ))
                                            }

                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Checkboxes */}
                <div className="grid grid-cols-2 gap-6 mt-6">

                    <FormField
                        control={form.control}
                        name="is_active"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-2'>
                                <FormControl>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="active"
                                            {...field}
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="data-[state=checked]:bg-primary border-primary"
                                            disabled={isPending}
                                        />
                                        <label htmlFor="active" className="text-gray-300 text-sm">
                                            Model is Active
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="is_deleted"
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-2'>
                                <FormControl>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="deleted"
                                            {...field}
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="data-[state=checked]:bg-primary border-primary"
                                            disabled={isPending}
                                        />
                                        <label htmlFor="deleted" className="text-gray-300 text-sm">
                                            Model will be Deleted
                                        </label>
                                    </div>
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
};