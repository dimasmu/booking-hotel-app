import { Metadata } from "next"
import HeaderSection from "@/components/header-section"
import Image from "next/image"
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5"

export const metadata: Metadata = {
    title: "About",
    description: "Who we are and what we do",
}

const AboutPage = () => {
    return (
        <div>
            <HeaderSection title="About Us" subtitle="Learn more about our hotel and services" />
            <div className="max-w-screen mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src="/about-image.jpg" width={650} height={579} alt="about image" className="ml-auto"/>
                    <div className="mr-auto">
                        <h1 className="text-5xl font-semibold text-gray-900 mb-4">Who We Are</h1>
                        <p className="text-gray-700 py-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optio pariatur distinctio magnam corporis quos ab similique rerum voluptatum quia?
                        </p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5 ">
                                <div className="flex-none mt-1">
                                    <IoEyeOutline className="size-7 text-3xl text-orange-400" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet
                                        consectetur, adipisicing elit. Minus, totam eius sint sequi deleniti esse.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-5 ">
                                <div className="flex-none mt-1">
                                    <IoLocateOutline className="size-7 text-3xl text-orange-400" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Vitae ratione numquam nesciunt expedita reiciendis quas culpa laudantium quasi accusantium praesentium!
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
