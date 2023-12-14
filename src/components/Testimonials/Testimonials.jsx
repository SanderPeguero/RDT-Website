import Brands from "./Brands.png"
import avatar from "./avatar.png"
import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContextRDT } from "../../Context";
function Testimonials() {
    const { SaveTestimonials, GetAllTestimonials } = useContextRDT()
    const [storedData, setstoredData] = useState("")
    // const [PrimerTitulo, setPrimerTitulo] = useState("Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.")
    // const [SegundoTitulo, setSegundoTitulo] = useState("Organize across")
    // const [TerceroTitulo, setTerceroTitulo] = useState(" Ui designer")
    // const [PrimerImagen, setPrimerImagen] = useState(avatar)

    const [PrimerTitulo, setPrimerTitulo] = useState("")
    const [SegundoTitulo, setSegundoTitulo] = useState("")
    const [TerceroTitulo, setTerceroTitulo] = useState("")
    const [PrimerImagen, setPrimerImagen] = useState("")


    useEffect(() => {
        const fetchData = async () => {
            try {
                const partnersData = await GetAllTestimonials();
                if (partnersData) {
                    // Asigna los valores correspondientes a cada estado
                    setPrimerTitulo(partnersData[1]?.Title || "");
                    setSegundoTitulo(partnersData[2]?.Title || "");
                    setTerceroTitulo(partnersData[3]?.Title || "");
                    setPrimerImagen(partnersData[4]?.Image || "");

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     SaveTestimonials(1, "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.", "")
    //     SaveTestimonials(2,"Organize across", "")
    //     SaveTestimonials(3, "Ui designer", "")
    //     SaveTestimonials(4, "", avatar)
    // }, [])

    const Editar = (dato) => {
        let d

        switch (dato) {
            case 1:

                d = prompt('Edit title:', PrimerTitulo)
                setPrimerTitulo(d !== null ? d : PrimerTitulo);
                if (d !== null) {
                    SaveTestimonials(dato, d, PrimerImagen)
                }

                break;

            case 2:

                d = prompt('Edit title:', SegundoTitulo)
                setSegundoTitulo(d !== null ? d : SegundoTitulo);
                if (d !== null) {
                    SaveTestimonials(dato, d, PrimerImagen)
                }


                break;

            case 3:

                d = prompt('Edit title:', TerceroTitulo)
                setTerceroTitulo(d !== null ? d : TerceroTitulo);
                if (d !== null) {
                    SaveTestimonials(dato, d, PrimerImagen)
                }
                break;
            case 4:
                d = prompt('Edit Image:', PrimerImagen)
                setPrimerImagen(d !== null ? d : PrimerImagen);
                if (d !== null) {
                    SaveTestimonials(dato, "", PrimerImagen)
                }

                break;

            default:



        }
    }
    const Eliminar = (dato) => {
        switch (dato) {
            case 1:
                setPrimerTitulo("");
                SaveTestimonials(dato, "", "");
                break;

            case 2:
                setSegundoTitulo("");
                SaveTestimonials(dato, "", "");
                break;

            case 3:
                setTerceroTitulo("");
                SaveTestimonials(dato, "", "");
                break;
            case 4:

                setPrimerImagen("")
                SaveTestimonials(dato, "", "");

                break;

            default:

        }
    }


    useEffect(() => {
        setstoredData(localStorage.getItem('D'));
    }, [])
    return (
        <div className="relative flex flex-col items-center justify-center mb-[4rem] mt-[4rem]" >

            <div className="text-center mb-24">
                <h2 className="font-roboto text-4xl font-normal leading-14 tracking-tighter text-[#252B42]">
                    Testimonials
                </h2>
            </div>

            <div className="flex flex-col items-center justify-center">
                <img
                    src={Brands}
                    className="mb-12"
                />
                {storedData ?
                    <div className="flex flex-row">
                        <div className="px-3 py-2 text-right text-xs leading-4">
                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                <FaEdit size={14} onClick={(e) => Editar(1)} className="text-yellow-400" />
                            </button>
                        </div>
                        <div className="px-3 py-2 text-right text-xs leading-4">
                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                <MdDelete size={14} onClick={(e) => Eliminar(1)} className="text-red-500" />
                            </button>
                        </div>
                    </div>
                    : null}
                <h4 className="font-roboto text-sm mt-2 font-roboto text-center ml-[3rem] w-[35rem] text-base font-bold leading-5 tracking-tighter text-center text-[#374754] mb-12">
                    {PrimerTitulo}
                </h4>

                <div className="flex flex-row ">
                    {storedData ?
                        <>
                            <div className="px-3 py-2 text-right text-xs leading-4">
                                <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                    <FaEdit size={14} onClick={(e) => Editar(4)} className="text-yellow-400" />
                                </button>
                            </div>
                            <div className="px-3 py-2 text-right text-xs leading-4">
                                <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                    <MdDelete size={14} onClick={(e) => Eliminar(4)} className="text-red-500" />
                                </button>
                            </div></> : null}

                    {storedData ?
                        <div className=" mt-10">
                            <img
                                src={PrimerImagen}
                                className="mr-4"
                            />
                        </div> : <img
                            src={avatar}
                            className="mr-4"
                        />}
                    <div className="flex flex-col">
                        {storedData ?
                            <div className="flex flex-row">
                                <div className="px-3 py-2 text-right text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} onClick={(e) => Editar(2)} className="text-yellow-400" />
                                    </button>
                                </div>
                                <div className="px-3 py-2 text-right text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                        <MdDelete size={14} onClick={(e) => Eliminar(2)} className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                            : null}
                        <div>
                            {SegundoTitulo}
                        </div>
                        {storedData ?
                            <div className="flex flex-row">
                                <div className="px-3 py-2 text-right text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                        <FaEdit size={14} onClick={(e) => Editar(3)} className="text-yellow-400" />
                                    </button>
                                </div>
                                <div className="px-3 py-2 text-right text-xs leading-4">
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                        <MdDelete size={14} onClick={(e) => Eliminar(3)} className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                            : null}
                        <div>
                            {TerceroTitulo}
                        </div>
                    </div>

                </div>
                <button className="mt-16 w-[236px] h-[65px] p-[16px, 0px] rounded-full bg-[#38A3F1] hover:bg-blue-500 text-white font-roboto font-semibold text-lg leading-[33px] tracking-[0.1px] text-center">
                    More Testimonials
                </button>
            </div>
        </div>
    )

}

export default Testimonials