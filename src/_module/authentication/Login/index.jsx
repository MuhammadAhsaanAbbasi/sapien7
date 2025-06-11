"use client";

import React, { startTransition, useTransition } from "react";

import google_icon from "../../../../public/images/google_icon.svg";
import apple_icon from "../../../../public/images/apple_icon.svg";
import facebook_icon from "../../../../public/images/facebook_icon.svg";
import auth_logo from "../../../../public/images/auth_logo.svg";
import Image from "next/image";
import Input from "@/components/Form/Input";
import { Checkbox, FormControlLabel, FormLabel } from "@mui/material";
import "./index.css";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from "@/schema/auth";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Login } from "@/lib/actions/auth.actions";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values) => {
    startTransition(() => {
      Login(values)
        .then((res) => {
          if (res?.error) {
            toast.error("Failed Form", {
              description: (res?.error),
              duration: 2000,
            });
          }
          if (res?.success) {
            toast.success("Login Success!", {
              description: (res?.message),
              duration: 2000,
              style: {}
            });
            router.push("/");
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
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen max-h-auto w-full z-0 bg-[#141219]"
      style={{ backgroundImage: `url('/images/gradient.png')` }}
    >
      <div className="flex justify-center items-start w-full p-5">

        <div className=""></div>

        <div className="flex justify-center items-center text-center w-full relative">
          <div
            className="bg-cover bg-no-repeat bg-center h-36 w-36 rounded-full bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)]"
            style={{ backgroundImage: `url('/images/heading_bg.png')` }}
          ></div>
          <h1 className="text-white font-medium text-3xl text-center pt-10  absolute top-1">
            Hi! I'm Sapien <span className="text-[#FF60A5]"> 7</span>
          </h1>
        </div>


      </div>

      <div className="relative flex flex-col justify-center items-center gap-3 max-w-[450px] w-full mx-auto  text-white bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)] border-[1px] border-solid border-[#FFFFFF33] py-12 rounded-xl h-full">
        <div className="absolute -top-16">
          <Image
            alt="main_logo"
            src={auth_logo}
            width={"80"}
            className="py-4"
          />
        </div>
        <div className="">
          <h1 className="font-urbanist text-2xl font-normal">
            Hi There, Welcome! 👋
          </h1>
        </div>

        <div className="form_section max-w-96 w-auto md:w-full my-6">
          <Form {...form}>
            <form className="flex flex-col justify-center gap-2 max-w-96 w-full mx-auto"
              onSubmit={form.handleSubmit(onSubmit)}>
              <div className="my-2">

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className='my-3'>
                      <FormControl>
                        <Input
                          labelIcon={
                            <Image
                              src="/images/email_icon.svg"
                              alt=""
                              className="cursor-pointer"
                              width={10}
                              height={10}
                            />
                          }
                          title="Email"
                          {...field}
                          id="email"
                          type="email"
                          placeholder="Enter Email here"
                          className="w-full" // Added background here
                          inputClasses="rounded-xl py-4"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="my-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className='my-3'>
                      <FormControl>
                        <Input
                          labelIcon={
                            <Image
                              src="/images/password_icon.svg"
                              alt=""
                              className="cursor-pointer"
                              width={10}
                              height={10}
                            />
                          }
                          {...field}
                          title="Password"
                          id="password"
                          type="password"
                          placeholder="Enter Password here"
                          className="w-full" // Added background here
                          inputClasses="rounded-xl py-4"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-between items-center py-4">
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "#785BEF",
                          borderRadius: "12px",
                          "&.Mui-checked": {
                            color: "#785BEF",
                            borderRadius: "12px",
                          },
                          fontSize: "14px",
                        }}
                      />
                    }
                    label="Save Browser"
                    className="!font-urbanist !text-sm"
                  />
                </div>
                <div className="">
                  <p className="text-sm text-[#785BEF] !font-urbanist">
                    Forgot Password?
                  </p>
                </div>
              </div>

              <div className="w-full my-2">
                <Button className="rounded-4xl !font-urbanist w-full py-4 bg-[linear-gradient(90deg,#785BEF_0%,#2268EE_100%)] shadow-[0px_0px_48px_1px_#FFFFFF26_inset] hover:cursor-pointer"
                  type="submit" disabled={isPending} >
                  {
                    isPending ? <LoaderCircle className="animate-spin" /> : "Login"
                  }
                </Button>
              </div>
            </form>
          </Form>

          {/* info section for other login plaform */}
          <div className="flex justify-center items-center py-6 max-w-96 w-full mx-auto">
            <div className="w-full h-[1px] rounded-md bg-[#FFFFFFB2]"></div>
            <a
              href={"/login"}
              className="text-sm font-light !font-urbanist text-[#FFFFFFB2] w-full text-center"
            >
              Or Login with
            </a>
            <div className="w-full h-[1px] rounded-md bg-[#FFFFFFB2]"></div>
          </div>

          {/* Other social platform login */}

          <div className="flex justify-center items-center gap-x-10 my-2">
            <div>
              <Image src={google_icon} alt="google_icon" className="w-14" />
            </div>
            <div>
              <Image src={apple_icon} alt="apple_icon" className="w-14" />
            </div>

            <div>
              <Image src={facebook_icon} alt="facebook_icon" className="w-14" />
            </div>
          </div>

          <div className="pt-10">
            <p className="text-sm font-normal font-roboto text-[#FFFFFF] w-full text-center !font-urbanist">
              Don't have an account?{" "}
              <a
                href={"/register"}
                className="text-SecondaryColor text-[#785BEF]"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
