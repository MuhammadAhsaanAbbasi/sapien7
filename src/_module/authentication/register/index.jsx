"use client";
import React, { useTransition } from 'react';
import google_icon from "../../../../public/images/google_icon.svg";
import apple_icon from "../../../../public/images/apple_icon.svg";
import facebook_icon from "../../../../public/images/facebook_icon.svg";
import auth_logo from "../../../../public/images/auth_logo.svg";


import Image from "next/image";
import Input from "@/components/Form/Input";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import "./index.css";
import { RegisterSchema } from '@/schema/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Registeration } from '@/lib/actions/auth.actions';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const RegistrationForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      phone_number: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values) => {
    startTransition(() => {
      Registeration(values)
        .then((res) => {
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
      className="bg-cover bg-no-repeat bg-center   min-h-screen max-h-auto w-full z-0 bg-[#141219]"
      style={{ backgroundImage: `url('/images/gradient.png')` }}
    >
      <div className="flex justify-center items-start w-full pt-8 px-5">

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

      <div className="relative flex flex-col justify-center items-center gap-3 max-w-2xl w-full mx-auto  text-white bg-[radial-gradient(98.37%_109.43%_at_50%_50%,rgba(255,255,255,0)_36.6%,rgba(255,255,255,0.2)_100%)] border-[1px] border-solid border-[#FFFFFF33] py-12 rounded-xl ">
        <div className="absolute -top-16">
          <Image
            alt="main_logo"
            src={auth_logo}
            width={"80"}
            className="py-4"
          />
        </div>
        <div className="">
          <h1 className="font-urbanist text-2xl font-normal pt-8">
            Create New Account
          </h1>
        </div>

        <div className="form_section max-w-xl w-auto md:w-full my-6">
          <Form {...form}>
            <form className="flex flex-col justify-center gap-2 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                <div className="my-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className='my-3'>
                        <FormControl>
                          <Input
                            labelIcon={
                              <img
                                src="/images/name_icon.svg"
                                alt=""
                                className="cursor-pointer"
                                width={10}
                                height={10}
                              />
                            }
                            {...field}
                            title="Full Name"
                            type="text"
                            placeholder="Enter Full Name here"
                            className="w-full"
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
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem className='my-3'>
                        <FormControl>
                          <Input
                            labelIcon={
                              <img
                                src="/images/phone_icon.svg"
                                alt=""
                                className="cursor-pointer"
                              />
                            }
                            {...field}
                            title="Phone Number"
                            type="text"
                            placeholder="Enter Phone Number here"
                            className="w-full"
                            inputClasses="rounded-xl py-4"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
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
              </div>



              <div className="flex justify-center items-center py-4">
                <div>
                  {/* <p className="!font-urbanist text-sm">Save Browser</p>     */}
                  {/* <div> */}
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
                    label={
                      <span className="!font-urbanist !text-sm">
                        I agree to the{" "}
                        <a href="/terms-and-conditions" className="text-[#785BEF]" target="_blank" rel="noopener noreferrer">
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="text-[#785BEF]" target="_blank" rel="noopener noreferrer">
                          Privacy Policy
                        </a>{" "}
                        of Sapien 7
                      </span>
                    }
                  />
                  {/* </div> */}
                </div>

              </div>

              <div className="w-full my-2 mx-auto">
                <Button className="rounded-4xl !font-urbanist w-full py-4 bg-[linear-gradient(90deg,#785BEF_0%,#2268EE_100%)] shadow-[0px_0px_48px_1px_#FFFFFF26_inset] hover:cursor-pointer"
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </form>
          </Form>

          {/* info section for other login plaform */}
          <div className="flex justify-center items-center py-6 w-full mx-auto">
            <div className="w-full h-[1px] rounded-md bg-[#FFFFFFB2]"></div>
            <a
              href={"/login"}
              className="text-sm font-light !font-urbanist text-[#FFFFFFB2] w-full text-center"
            >
              Or Register with
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
              Already have an account? {" "}
              <a
                href={"/login"}
                className="text-SecondaryColor text-[#785BEF]"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm;
