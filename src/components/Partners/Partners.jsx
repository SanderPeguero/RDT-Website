import logos_apiary from "./logos_apiary.png"
import logos_androidicon from "./logos_android-icon.png"
import logos_basecamp from "./logos_basecamp.png"
import logos_airbnb from "./logos_airbnb.png"
import logos_apple_app_store from "./logos_apple-app-store.png"
import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const partners = [
    {
        id: 1,
        name: 'Client Name',
        imageSrc: logos_apiary,
        description: " Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",

    },
    {
        id: 2,
        name: 'Client Name',
        imageSrc: logos_androidicon,
        description: " Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },

    {
        id: 3,
        name: 'Client Name',
        imageSrc: logos_basecamp,
        description: " Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },
    {
        id: 4,
        name: 'Client Name',
        imageSrc: logos_basecamp,
        description: " Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },

    {
        id: 5,
        name: 'Client Name',
        imageSrc: logos_airbnb,
        description: " Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },

    {
        id: 6,
        name: 'Client Name',
        imageSrc: logos_apple_app_store,
        description: " Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    },

]
//RW-5
function Partners() {
    
    const [storedData, setstoredData] = useState("")
    const [PrimerTitulo, setPrimerTitulo] = useState("Client Name");
    const [SegundoTitulo, setSegundoTitulo] = useState("Client Name");
    const [TerceroTitulo, setTerceroTitulo] = useState("Client Name");
    const [CuartoTitulo, setCuartoTitulo] = useState("Client Name");
    const [QuintoTitulo, setQuintoTitulo] = useState("Client Name");
    const [SextoTitulo, setSextoTitulo] = useState("Client Name");

    const [PrimerImagen, setPrimerImagen] = useState(logos_apiary);
    const [SegundaImagen, setSegundaImagen] = useState(logos_androidicon);
    const [TerceraImagen, setTerceraImagen] = useState(logos_basecamp);
    const [CuartaImagen, setCuartaImagen] = useState(logos_basecamp);
    const [QuintaImagen, setQuintaImagen] = useState(logos_airbnb);
    const [SextaImagen, setSextaImagen] = useState(logos_apple_app_store);

    const [PrimerDescripcion, setPrimerDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    const [SegundaDescripcion, setSegundaDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    const [TerceraDescripcion, setTerceraDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    const [CuartaDescripcion, setCuartaDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    const [QuintaDescripcion, setQuintaDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    const [SextaDescripcion, setSextaDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");

    const STOP = (e) => {
        e.stopPropagation();
    }

    const Editar = (dato,e) => {
        let d
        switch (dato) {
            case 1:

                d = prompt('Edit title:', PrimerTitulo)
                setPrimerTitulo(d !== null ? d : PrimerTitulo);


                break;

            case 2:

                d = prompt('Edit title:', SegundoTitulo)
                setSegundoTitulo(d !== null ? d : SegundoTitulo);


                break;

            case 3:

                d = prompt('Edit title:', TerceroTitulo)
                setTerceroTitulo(d !== null ? d : TerceroTitulo);
                break;
            case 4:
                d = prompt('Edit title:', CuartoTitulo)
                setCuartoTitulo(d !== null ? d : CuartoTitulo);

                break;
            case 5:

                d = prompt('Edit title:', QuintoTitulo)
                setQuintoTitulo(d !== null ? d : QuintoTitulo);

                break;
            case 6:
                d = prompt('Edit title:', SextoTitulo)
                setSextoTitulo(d !== null ? d : SextoTitulo);

                break;

            case 7:
                d = prompt('Edit title:', PrimerImagen)
                setPrimerImagen(d !== null ? d : PrimerImagen);
            
                break;
            case 8:
                d = prompt('Edit title:', SegundaImagen)
                setSegundaImagen(d !== null ? d : SegundaImagen);

                break;
            case 9:
                d = prompt('Edit title:', TerceraImagen)
                setTerceraImagen(d !== null ? d : TerceraImagen);

                break;
            case 10:
                d = prompt('Edit title:', CuartaImagen)
                setCuartaImagen(d !== null ? d : CuartaImagen);

                break;
            case 11:
                d = prompt('Edit title:', QuintaImagen)
                setQuintaImagen(d !== null ? d : QuintaImagen);

                break;
            case 12:
                d = prompt('Edit title:', SextaImagen)
                setSextaImagen(d !== null ? d : SextaImagen);

                break;
            case 13:
                d = prompt('Edit title:', PrimerDescripcion)
                setPrimerDescripcion(d !== null ? d : PrimerDescripcion);

                break;
            case 14:
                d = prompt('Edit title:', SegundaDescripcion)
                setSegundaDescripcion(d !== null ? d : SegundaDescripcion);


                break;
            case 15:
                d = prompt('Edit title:', TerceraDescripcion)
                setTerceraDescripcion(d !== null ? d : TerceraDescripcion);


                break;
            case 16:
                d = prompt('Edit title:', CuartaDescripcion)
                setCuartaDescripcion(d !== null ? d : CuartaDescripcion);


                break;
            case 17:
                d = prompt('Edit title:', QuintaDescripcion)
                setQuintaDescripcion(d !== null ? d : QuintaDescripcion);

                break;
            case 18:
                d = prompt('Edit title:', SextaDescripcion)
                setSextaDescripcion(d !== null ? d : SextaDescripcion);

                break;

            default:

        }
    }
    const Eliminar = (dato) => {
        switch (dato) {
            case 1:

                setPrimerTitulo("");

                break;

            case 2:

                setSegundoTitulo("")

                break;

            case 3:

                setTerceroTitulo("")

                break;
            case 4:
                setCuartoTitulo("")

                break;
            case 5:

                setQuintoTitulo("")

                break;
            case 6:
                setSextoTitulo("")

                break;

            case 7:
                setPrimerImagen("")

                break;
            case 8:
                setSegundaImagen("")

                break;
            case 9:
                setTerceraImagen("")

                break;
            case 10:
                setCuartaImagen("")

                break;
            case 11:
                setQuintaImagen("")

                break;
            case 12:
                setSextaImagen("")

                break;
            case 13:
                setPrimerDescripcion("")

                break;
            case 14:
                setSegundaDescripcion("")

                break;
            case 15:
                setTerceraDescripcion("")

                break;
            case 16:
                setCuartaDescripcion("")

                break;
            case 17:
                setQuintaDescripcion("")

                break;
            case 18:
                setSextaDescripcion("")

                break;

            default:

        }
    }
    useEffect(() => {
        setstoredData(localStorage.getItem('D'));
    }, [])


    return (
        <div>
            <div className="bg-white relative flex flex-col items-center justify-center mb-[4rem] mt-[2rem]" >


                <div className="">
                    <h2 className="font-roboto text-4xl font-normal leading-14 tracking-tighter text-center text-blue-950  py-4">
                        Partners
                    </h2>
                    <h4 className="font-roboto text-base font-bold leading-5 tracking-tighter text-center mt-4 text-[#374754]">
                        Most calendars are designed for teams.<br /> Slate is designed for freelancers
                    </h4>

                </div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8" >
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                        <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                            <div className="flex flex-col items-center justify-center">
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
                                <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                    {PrimerTitulo}
                                </h6>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(7,e)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(7)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="">
                                    <img
                                        src={PrimerImagen}
                                        alt={""}
                                        className="mx-auto"
                                    />
                                </div>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(13)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(13)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                        {PrimerDescripcion}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                            <div className="flex flex-col items-center justify-center">
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
                                <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                    {SegundoTitulo}
                                </h6>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(8)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(8)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="">
                                    <img
                                        src={SegundaImagen}
                                        alt={""}
                                        className="mx-auto"
                                    />
                                </div>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(14)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(14)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                        {SegundaDescripcion}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                            <div className="flex flex-col items-center justify-center">
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
                                <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                    {TerceroTitulo}
                                </h6>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(9)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(9)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="">
                                    <img
                                        src={TerceraImagen}
                                        alt={""}
                                        className="mx-auto"
                                    />
                                </div>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(15)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(15)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-12">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                        {TerceraDescripcion}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                            <div className="flex flex-col items-center justify-center">
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(4)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(4)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}

                                <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                    {CuartoTitulo}
                                </h6>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(10)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(10)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="">
                                    <img
                                        src={CuartaImagen}
                                        alt={""}
                                        className="mx-auto"
                                    />
                                </div>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(16)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(16)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                        {CuartaDescripcion}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                            <div className="flex flex-col items-center justify-center">
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(5)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(5)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                    {QuintoTitulo}
                                </h6>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(11)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(11)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="">
                                    <img
                                        src={QuintaImagen}
                                        alt={""}
                                        className="mx-auto"
                                    />
                                </div>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(17)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(17)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                        {QuintaDescripcion}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                            <div className="flex flex-col items-center justify-center">
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(6)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(6)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                    {SextoTitulo}
                                </h6>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(12)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(12)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}
                                <div className="">
                                    <img
                                        src={SextaImagen}
                                        alt={""}
                                        className="mx-auto"
                                    />
                                </div>
                                {storedData ?
                                    <div className="flex flex-row">
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} onClick={(e) => Editar(18)} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} onClick={(e) => Eliminar(18)} className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                    : null}

                                <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                        {SextaDescripcion}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <button className="w-[236px] h-[65px] p-[16px, 0px] rounded-full bg-[#38A3F1] hover:bg-blue-500 text-white font-roboto font-semibold text-lg leading-[33px] tracking-[0.1px] text-center">
                    Try For Free
                </button>

            </div>
        </div>
    )

}

export default Partners