import Imagen1 from "./Imagen1.png"
import Imagen2 from "./Imagen2.png"
import Imagen3 from "./Imagen3.png"
import Logo1 from "./Logo1.png"
import Logo2 from "./Logo2.png"
import Logo3 from "./Logo3.png"

import { IoLocationOutline } from "react-icons/io5";


function Contact() {

    return (
        <div className="py-[4rem] text-center mb-4 font-roboto bg-[#000320] text-white">
            <p className="text-4xl pt-2 font-roboto">Contact Us</p>
            <p className="text-xl pt-2 font-roboto">Most calendars are designed for teams. <br />
                Slate is designed for freelancers</p>
            <div className="flex flex-col-reverse pt-10 pl-5 pr-5  mt-4 sm:flex-row sm:justify-center">
                <div className="w-full md:w-[500px] mt-10 p-6 md:p-12 bg-white rounded-md shadow-md">
                    <form>
                        <div className="mb-10">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                className="pl-3 w-full px-3 py-2 text-[#000320] border rounded-full focus:outline-none focus:border-blue-500 bg-gray-100"
                                required
                            />
                        </div>
                        <div className="mb-10">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email"
                                className="pl-3 w-full px-3 py-2 text-[#000320] border rounded-full focus:outline-none focus:border-blue-500 bg-gray-100"
                                required
                            />
                        </div>
                        <div className="mb-10">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Your message"
                                className="w-full px-3 py-2 text-[#000320] border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-16 rounded-full flex justify-center"
                        >
                            Send
                        </button>

                    </form>
                </div>

                <div className="flex flex-col-reverse  sm:flex-col justify-center md:pl-10">
                    <div>
                        <div className="mb-4">
                            <div className="flex items-center flex-wrap">
                                <img
                                    src={Logo1}
                                    alt="Imagen 1"
                                    className="h-6 mb-3 md:mb-0"
                                />
                                <p className="text-base md:text-lg ml-2 font-roboto font-bold">
                                    6386 Spring St undefined Anchorage,
                                    <br />
                                    Georgia 12473 United StatesFastest
                                </p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center flex-wrap">
                                <img
                                    src={Logo2}
                                    alt="Imagen 2"
                                    className="h-6 mb-3 md:mb-0"
                                />
                                <p className="text-base md:text-lg ml-2 font-roboto font-bold">
                                    (843) 555-0130
                                </p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center flex-wrap">
                                <img
                                    src={Logo3}
                                    alt="Imagen 3"
                                    className="h-4 md:mb-0"
                                />
                                <p className="text-base md:text-lg ml-2 font-roboto font-bold">
                                    willie.jennings@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-row pt-10  mt-4 sm:flex-row sm:justify-center">
                            <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4">
                                <div className="flex items-center flex-wrap">
                                    <img
                                        src={Imagen1}
                                        alt="Imagen 1"
                                        className=" h-10 w-10 mb-3 sm:mb-0"
                                    />
                                </div>

                            </div>
                            <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-4">
                                <div className="flex items-center  flex-wrap">
                                    <img
                                        src={Imagen2}
                                        alt="Imagen 2"
                                        className=" h-10 w-10 mb-3 sm:mb-0"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center  flex-wrap">
                                    <img
                                        src={Imagen3}
                                        alt="Imagen 3"
                                        className=" h-10 w-10 mb-3 sm:mb-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Contact