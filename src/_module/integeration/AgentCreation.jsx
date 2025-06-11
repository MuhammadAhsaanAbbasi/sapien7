"use client";
import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { Button } from "@/components/ui/button";
import { agentStepType, agentSteps } from "@/constants/data";
import Image from "next/image";
// (move your arrays into a separate file for clarity)

export const AgentCreation = () => {
    const [activeStep, setActiveStep] = useState("basic");
    const [agentId, setAgentId] = useState("");

    // find the component for the current step
    const ActiveComponent =
        agentSteps.find((s) => s.type === activeStep)?.component
        ?? (() => <div>Step not found</div>);

    return (
        <CardWrapper>
            <section className="flex justify-center items-center p-4 my-10">
                <div className="w-full">
                    {/* ——— Steps Bar ——— */}
                    <div className="flex justify-center items-center mb-12">
                        {agentStepType.map((step, i) => (
                            <React.Fragment key={step.type}>
                                <div
                                    className="flex flex-col items-center cursor-pointer"
                                    onClick={() => setActiveStep(step.type)}
                                >
                                    <div
                                        className={`
                      w-16 h-16 rounded-full flex items-center justify-center
                      ${activeStep === step.type
                                                ? "bg-primary"
                                                : "bg-white/10"
                                            }
                    `}
                                    >
                                        <Image 
                                        src={step.icon}
                                        alt={step.type}
                                        width={24}
                                        height={24}
                                        />
                                    </div>
                                    <span
                                        className={`
                      text-sm mt-2
                      ${activeStep === step.type
                                                ? "text-primary/80"
                                                : "text-white/25"
                                            }
                    `}
                                    >
                                        {step.text}
                                    </span>
                                </div>

                                {/* connector line, skip after last */}
                                {i < agentStepType.length - 1 && (
                                    <div className="w-12 h-[2px] bg-white mx-2" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* ——— Active Step’s Content ——— */}
                    <ActiveComponent setActiveStep={(e) => setActiveStep(e)} 
                        agentId={agentId} setAgentId={(e) => setAgentId(e)}
                        >
                        <div className="flex justify-center mt-8">
                            <Button
                                className="bg-primary hover:bg-primary/90 text-white px-12 py-2 h-14 max-w-[393px] w-full rounded-full text-base font-medium font-inter hover:cursor-pointer"
                                // onClick={() => {
                                //     // go to next step in your array
                                //     const idx = agentStepType.findIndex((s) => s.type === activeStep);
                                //     const next = agentStepType[idx + 1];
                                //     if (next) setActiveStep(next.type);
                                // }}
                                type="submit"
                            >
                                {activeStep === agentStepType[agentStepType.length - 1].type
                                    ? "Finish"
                                    : "Continue"}
                            </Button>
                        </div>
                    </ActiveComponent>

                    {/* example: if you need a Continue button inside each step */}
                </div>
            </section>
        </CardWrapper>
    );
};
