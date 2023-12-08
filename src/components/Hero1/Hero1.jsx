import { useState, useEffect } from "react";
import TicketSystem from "./Ticket System Mockup.png";
import background2 from "./background.jpg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function Hero1() {
    const [image, setImage] = useState(TicketSystem);
    const [text, setText] = useState({
        title: 'We focus on ergonomics',
        description: 'Most calendars are designed for teams. Slate is designed for freelancers',
    });

    const authAdmin = localStorage.getItem('D')

    const handleEditImg = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const imageUrl = URL.createObjectURL(selectedImage);
            setImage(imageUrl)
        }
    }

    const handleDeleteImg = () => {
        setImage(null)
    };

    const handleEditTitle = () => {
        const newTitle = prompt('Edit title:', text.title);
        if (newTitle !== null) {
            setText(prevText => ({ ...prevText, title: newTitle }));
        }
    }

    const handleDeletedTitle = () => {
        setText(prevText => ({ ...prevText, title: '' }));
    }

    const handleEditDescription = () => {
        const newDescription = prompt('Edit title:', text.description);
        if (newDescription !== null) {
            setText(prevText => ({ ...prevText, description: newDescription }));
        }
    }

    const handleDeletedDescription = () => {
        setText(prevText => ({ ...prevText, description: '' }));
    }

    return (
        <div className="relative">
            <img src={background2} className="w-full h-[50rem]" alt="Background" />
            <div className="absolute inset-0 flex items-center md:items-start justify-center md:pt-[5rem]">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                    <div className="mt-[7rem] block md:hidden">
                        <button className="w-[236px] h-[65px] p-[16px, 0px] rounded-full bg-blue-500 text-white font-roboto font-semibold text-lg leading-[33px] tracking-[0.1px] text-center">
                            Try For Free
                        </button>
                    </div>

                    <div className=" flex flex-col-reverse md:flex-col w-[300px] md:w-[700px] mx-[8rem] md:mx-[8rem] pt-[3rem]">
                        {authAdmin === null ? "" : <div className="flex flex-row">
                            <label htmlFor="file-upload" className="px-3 py-2 text-right  text-xs leading-4">
                                <div className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                    <input id="file-upload" type="file" onChange={handleEditImg} className="hidden" />
                                    <FaEdit size={14} className="text-yellow-400" />
                                </div>

                            </label>

                            <div className="px-3 py-2  text-right  text-xs leading-4">
                                <button onClick={handleDeleteImg} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                    <MdDelete size={14} className="text-red-500" />
                                </button>
                            </div>
                        </div>
                        }
                        {image === null ? "" : <img
                            src={image}
                            className="w-full"
                            alt="Ticket System" />}
                    </div>


                    <div className="flex flex-col mt-[4rem] my-[4rem]">
                        <div className="my-8 w-[321px] h-auto mt-auto">
                            <h1 className=" font-roboto font-extrabold text-4xl leading-66 tracking-[0.2px] text-white  break-before-auto">
                                {text.title}
                                {authAdmin === null ? "" :
                                    <div className="flex flex-row my-2">
                                        <div className="px-3 py-2 text-right  text-xs leading-4">
                                            <button onClick={handleEditTitle} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2  text-right  text-xs leading-4">
                                            <button onClick={handleDeletedTitle} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                }
                            </h1>
                        </div>
                        <div className="w-[298px] max-h-full">
                            <h4 className="font-roboto font-bold text-base leading-20 tracking-[0.2px] text-white   break-before-auto">
                                {text.description}
                                {authAdmin === null ? "" :
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right  text-xs leading-4">
                                            <button onClick={handleEditDescription} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2  text-right  text-xs leading-4">
                                            <button onClick={handleDeletedDescription} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                }
                            </h4>


                        </div>
                        <div className="mt-[4rem] hidden md:block">
                            <button className="w-[236px] h-[65px] p-[16px, 0px] rounded-full bg-[#38A3F1] hover:bg-blue-500 text-white font-roboto font-semibold text-lg leading-[33px] tracking-[0.1px] text-center">
                                Try For Free
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero1;