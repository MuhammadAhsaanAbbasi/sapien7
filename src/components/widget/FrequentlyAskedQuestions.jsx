"use client";
import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const faqs = [
    {
        "question": "How does Sapien7 differ from other multi-agent AI platforms?",
        "category": "General",
        "answer": "Sapien7 is built from the ground up for seamless coordination between multiple specialized agents. Unlike single-agent platforms, it provides a centralized orchestration layer that manages inter-agent communication, state sharing, and error handling automatically. This means you can compose complex workflows without writing glue code or worrying about synchronizing individual models."
    },
    {
        "question": "What are the steps to set up and deploy my first agent on Sapien7?",
        "category": "Getting Started",
        "answer": "1. Sign up for a Sapien7 account and verify your email.  \n2. Create a new project in the dashboard and choose an agent template (e.g., data-extractor, email-bot).  \n3. Configure your agent’s inputs, outputs, and triggers (HTTP, webhook, schedule).  \n4. Connect any required credentials or API keys under Integrations.  \n5. Test your agent in the built-in simulator.  \n6. Click “Deploy” to push it to production; your agent will receive a unique endpoint."
    },
    {
        "question": "Which third-party services and tools can I integrate with Sapien7 out of the box?",
        "category": "The Product",
        "answer": "Sapien7 offers native connectors for popular services including Slack, Microsoft Teams, GitHub, Salesforce, Shopify, Google Workspace, AWS S3, and custom REST/SOAP endpoints. You can also import any RESTful API via our API Connector wizard, or build your own plugin using our SDK."
    },
    {
        "question": "How is Sapien7 billed, and what subscription tiers are available?",
        "category": "Billing",
        "answer": "Sapien7 uses a usage-based model charged monthly. There are three tiers:  \n• Starter (up to 50 agent-hours, email support)  \n• Professional (up to 500 agent-hours, priority email & chat)  \n• Enterprise (unlimited agent-hours, dedicated CSM, 24/7 phone support)  \nOverages beyond your plan’s agent-hour quota are billed at $0.10 per agent-hour."
    },
    {
        "question": "What support resources are available if I run into issues or have questions?",
        "category": "General",
        "answer": "You can access our comprehensive documentation portal, including quick-start guides, API references, and troubleshooting articles. For direct assistance:  \n• Starter customers: email support within 24 hours.  \n• Professional customers: live chat (9am–6pm UTC) plus email.  \n• Enterprise customers: dedicated Slack channel, phone support, and a technical account manager."
    }
]


const FrequentlyAskedQuestions = () => {
    const [activeTab, setActiveTab] = useState("General");

    const filterFAQ = faqs.filter((faq) => faq.category === activeTab)
    return (
        <section className="sections_container !my-0 py-10 px-4 md:px-8">
            <div className="max-w-3xl mx-auto my-10 space-y-10">
                <div className="text-center space-y-3">
                    <h2 className="text-4xl lg:text-5xl font-semibold font-inter">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        We offer a range of pricing plans to fit every budget and level of need. Whether you're a solo professional
                    </p>
                </div>

                <div className="flex justify-center space-x-2">
                    {["General", "Getting Started", "Billing", "The Product"].map((tab, index) => (
                        <button
                            key={index}
                            className={cn(
                                "px-6 py-3 rounded-full text-lg font-medium font-inter transition-colors hover:cursor-pointer duration-300 max-h-12 h-full w-auto",
                                tab === activeTab ? "bg-[#FFFFFF40] text-white border border-[#FFFFFF33]"
                                    : "bg-white/10 text-[#FFFFFF99] hover:bg-white/5",
                            )}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {filterFAQ.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#FFFFFF26] py-2">
                            <AccordionTrigger className="flex justify-between py-4 text-left text-lg font-medium font-inter hover:cursor-pointer hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-white/40 pb-4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions