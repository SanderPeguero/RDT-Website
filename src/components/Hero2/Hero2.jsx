import { useState, useEffect } from "react";
import container from "./container.png"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
//RW-3
function Hero2() {
    const [image, setImage] = useState(container);
    const [text, setText] = useState({
        title: 'Lightning fast prototyping',
        description: 'Most calendars are designed for teams. Slate is designed for freelancers',
    });
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
        <div className="flex flex-col items-center justify-center mt-[6rem]">
            <div className="flex items-center p-2 gap-4">
                <h2 className="font-roboto font-normal text-4xl leading-10 tracking-tighter text-center text-black w-80 ">
                    {text.title}
                    <div className="flex flex-row items-center justify-center my-2">
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
                </h2>
            </div>
            <div>
                <h4 className="font-roboto font-semibold text-base leading-5 tracking-tighter text-center text-gray-700 mt-4 md:mt-2">
                    {text.description.split(/(?<=\.)\s*/).map((sentence, index) => (
                        <span key={index}>
                            {sentence}
                            <br />
                        </span>
                    ))}
                    <div className="flex flex-row items-center justify-center my-2">
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
                </h4>
            </div> 
            <div className="w-72 h-28 p-2 gap-4 mt-8 md:mt-16 flex items-center justify-center">
                <button className="w-60 h-16 p-4 rounded-full bg-[#38A3F1] hover:bg-blue-500 text-white font-roboto font-semibold text-base leading-8 tracking-tighter text-center">
                    Try For Free
                </button>
            </div>
            <div className="mt-8 md:mt-4 w-120 md:w-150">
                <div className="flex flex-row ml-[10rem]">
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
                <img className="mb-[4rem]" src={image} />
            </div>
        </div>
    )

}

export default Hero2