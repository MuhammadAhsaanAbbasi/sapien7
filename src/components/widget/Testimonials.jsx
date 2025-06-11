import React from "react"
import Link from "next/link"
import person1 from "@/../public/images/person1.png"
import person2 from "@/../public/images/person2.png"
import person3 from "@/../public/images/person3.png"
import person4 from "@/../public/images/person4.png"
import person5 from "@/../public/images/person5.png"
import person6 from "@/../public/images/person6.png"
import { Button } from "@/components/ui/button"
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image"

const testimonials = [
    {
        name: "Bradzky",
        handle: "@Bradzky (joined recently)",
        avatar: person1,
        content: (
            <>
                <p>Just got access to @Spline_. 🤯</p>
                <p>Even in alpha you know this is going to be special.</p>
                <p>We currently use Sanity and previously Contentful — but now I want to use Spline.</p>
            </>
        ),
    },
    {
        name: "Guillermo Rauch",
        handle: "@rauchg (Vercel founder)",
        avatar: person2,
        content: (
            <>
                <p>A document with an API.</p>
                <p>Content modeling and a Notion-like block editing experience all in one.</p>
            </>
        ),
    },
    {
        name: "Wilson Wilson",
        handle: "@Wilson (Wilson product)",
        avatar: person3,
        content: (
            <>
                <p>@Spline_ 7 is goated</p>
                <p>• is super extensible</p>
                <p>• has a great editor</p>
                <p>• is a joy to use</p>
            </>
        ),
    },
    {
        name: "Evan Stewart",
        handle: "@EvanStewart (Hyper)",
        avatar: person4,
        content: (
            <>
                <p>
                    I can't tell you how thoroughly easy it is to scaffold large stores of content with @Spline_. My entire
                    personal site (http://evanstewart.xyz/) and a large bulk of @StewartHQ's content (blog, media, changelog) is
                    powered w/@Spline_.
                </p>
                <p>Spline 7 is top-notch, highly recommended</p>
            </>
        ),
    },
    {
        name: "Michelle Bakels",
        handle: "@this.is.com/MichelleBakels",
        avatar: person5,
        content: (
            <>
                <p>The full @Spline_ 7 speaker lineup was announced today! 🔥</p>
                <p>All content was prepared and pushed to prod in one push with @Spline_.</p>
            </>
        ),
    },
    {
        name: "Steven Tey",
        handle: "@steventey (Vercel/Precedent)",
        avatar: person6,
        content: (
            <>
                <p>
                    If you're looking for a CMS, try @Spline_. 7 is a breath of fresh air over archaic incumbents like Contentful.
                </p>
                <p>AI-native experience (create blocks using natural language)</p>
                <p>ESR (essentially auto-generated types from your repo)</p>
                <p>Optimistic UI (changes are auto-saved)</p>
            </>
        ),
    },
]

export default function Testimonials() {
    function getColumns(colIndex) {
        return testimonials.filter((_, index) => index % 3 === colIndex);
    }
    return (
        <div className="sections_container !my-0 py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-5">
                    <h2 className="text-4xl lg:text-5xl font-semibold font-inter">
                        What People Are <span className="text-primary">Saying</span>
                    </h2>
                    <p className="text-base lg:text-lg font-normal text-[#787878]">
                        <Link href="https://x.com" className="text-white hover:text-white/20 transition duration-300">
                            Follow us on X
                        </Link>{" "}
                        to join the conversation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[0, 1, 2].map((colIndex) => {
                        const columnItems = getColumns(colIndex); // items for this specific column
                        return (
                            <div key={colIndex} className="flex flex-col gap-4">
                                {columnItems.map((item, index) => (
                                    <TestimonialCard key={index} testimonial={item} />

                                ))}
                            </div>
                        );
                    })}
                    {/* {testimonials.map((testimonial, index) => (
                    ))} */}
                </div>

                <div className="flex justify-center -my-14">
                    <Link
                        href="#"
                    >
                        <Button
                            className="bg-white/10 hover:bg-white/15 max-h-14 h-full max-w-[190px] w-full border border-primary text-white text-sm px-6 py-2 rounded-full transition-all hover:cursor-pointer"
                        >
                            View All
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-[#111116] border border-[#1F2020] rounded-lg p-5 relative">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
                        <Image
                            src={testimonial.avatar} alt={testimonial.name}
                            height={50}
                            width={50}
                            className="aspect-square h-full w-full"
                        />
                    </div>
                    <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-white">
                    <FaXTwitter size={16} />
                </button>
            </div>
            <div className="text-sm space-y-2">{testimonial.content}</div>
        </div>
    )
}


