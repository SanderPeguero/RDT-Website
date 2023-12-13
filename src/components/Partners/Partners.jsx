import logos_apiary from "./logos_apiary.png"
import logos_androidicon from "./logos_android-icon.png"
import logos_basecamp from "./logos_basecamp.png"
import logos_airbnb from "./logos_airbnb.png"
import logos_apple_app_store from "./logos_apple-app-store.png"
import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContextRDT } from "../../Context";
function Partners() {
    const { SavePartners, GetAllPartners } = useContextRDT()
    const [storedData, setstoredData] = useState("")
    // const [PrimerTitulo, setPrimerTitulo] = useState("Client Name");
    // const [SegundoTitulo, setSegundoTitulo] = useState("Client Name");
    // const [TerceroTitulo, setTerceroTitulo] = useState("Client Name");
    // const [CuartoTitulo, setCuartoTitulo] = useState("Client Name");
    // const [QuintoTitulo, setQuintoTitulo] = useState("Client Name");
    // const [SextoTitulo, setSextoTitulo] = useState("Client Name");

    // const [PrimerImagen, setPrimerImagen] = useState(logos_apiary);
    // const [SegundaImagen, setSegundaImagen] = useState(logos_androidicon);
    // const [TerceraImagen, setTerceraImagen] = useState(logos_basecamp);
    // const [CuartaImagen, setCuartaImagen] = useState(logos_basecamp);
    // const [QuintaImagen, setQuintaImagen] = useState(logos_airbnb);
    // const [SextaImagen, setSextaImagen] = useState(logos_apple_app_store);

    // const [PrimerDescripcion, setPrimerDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    // const [SegundaDescripcion, setSegundaDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    // const [TerceraDescripcion, setTerceraDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    // const [CuartaDescripcion, setCuartaDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    // const [QuintaDescripcion, setQuintaDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");
    // const [SextaDescripcion, setSextaDescripcion] = useState(" Slate helps you see how many more days you need to work to reach your financial goal for the month and year.");

    const [PrimerTitulo, setPrimerTitulo] = useState(" ");
    const [SegundoTitulo, setSegundoTitulo] = useState(" ");
    const [TerceroTitulo, setTerceroTitulo] = useState(" ");
    const [CuartoTitulo, setCuartoTitulo] = useState(" ");
    const [QuintoTitulo, setQuintoTitulo] = useState(" ");
    const [SextoTitulo, setSextoTitulo] = useState(" ");

    const [PrimerImagen, setPrimerImagen] = useState(" ");
    const [SegundaImagen, setSegundaImagen] = useState(" ");
    const [TerceraImagen, setTerceraImagen] = useState(" ");
    const [CuartaImagen, setCuartaImagen] = useState(" ");
    const [QuintaImagen, setQuintaImagen] = useState(" ");
    const [SextaImagen, setSextaImagen] = useState(" ");

    const [PrimerDescripcion, setPrimerDescripcion] = useState(" ");
    const [SegundaDescripcion, setSegundaDescripcion] = useState(" ");
    const [TerceraDescripcion, setTerceraDescripcion] = useState(" ");
    const [CuartaDescripcion, setCuartaDescripcion] = useState(" ");
    const [QuintaDescripcion, setQuintaDescripcion] = useState(" ");
    const [SextaDescripcion, setSextaDescripcion] = useState(" ");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const partnersData = await GetAllPartners();
                console.log("Hola", partnersData)
                if (partnersData) {
                    // Asigna los valores correspondientes a cada estado
                    setPrimerTitulo(partnersData[1]?.Title || "");
                    setSegundoTitulo(partnersData[2]?.Title || "");
                    setTerceroTitulo(partnersData[3]?.Title || "");
                    setCuartoTitulo(partnersData[4]?.Title || "");
                    setQuintoTitulo(partnersData[5]?.Title || "");
                    setSextoTitulo(partnersData[6]?.Title || "");

                    setPrimerImagen(partnersData[1]?.Image || "");
                    setSegundaImagen(partnersData[2]?.Image || "");
                    setTerceraImagen(partnersData[3]?.Image || "");
                    setCuartaImagen(partnersData[4]?.Image || "");
                    setQuintaImagen(partnersData[5]?.Image || "");
                    setSextaImagen(partnersData[6]?.Image || "");

                    setPrimerDescripcion(partnersData[1]?.Descripcion || "");
                    setSegundaDescripcion(partnersData[2]?.Descripcion || "");
                    setTerceraDescripcion(partnersData[3]?.Descripcion || "");
                    setCuartaDescripcion(partnersData[4]?.Descripcion || "");
                    setQuintaDescripcion(partnersData[5]?.Descripcion || "");
                    setSextaDescripcion(partnersData[6]?.Descripcion || "");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    // useEffect(() => {
    //     SavePartners(1, PrimerTitulo, PrimerDescripcion, logos_apiary)
    //     SavePartners(2, PrimerTitulo, PrimerDescripcion, logos_androidicon)
    //     SavePartners(3, PrimerTitulo, PrimerDescripcion, logos_basecamp)
    //     SavePartners(4, PrimerTitulo, PrimerDescripcion, logos_basecamp)
    //     SavePartners(5, PrimerTitulo, PrimerDescripcion, logos_airbnb)
    //     SavePartners(6, PrimerTitulo, PrimerDescripcion, logos_apple_app_store)
    // }, [])



    const Editar = (dato) => {
        let d
        switch (dato) {
            case 1:

                d = prompt('Edit title:', PrimerTitulo)
                setPrimerTitulo(d !== null ? d : PrimerTitulo);
                if (d !== null) {
                    SavePartners(dato, d, PrimerDescripcion, PrimerImagen)
                }

                break;

            case 2:

                d = prompt('Edit title:', SegundoTitulo)
                setSegundoTitulo(d !== null ? d : SegundoTitulo);
                if (d !== null) {
                    SavePartners(dato, d, SegundaDescripcion, SegundaImagen)
                }


                break;

            case 3:

                d = prompt('Edit title:', TerceroTitulo)
                setTerceroTitulo(d !== null ? d : TerceroTitulo);
                if (d !== null) {
                    SavePartners(dato, d, TerceraDescripcion, TerceraImagen)
                }
                break;
            case 4:
                d = prompt('Edit title:', CuartoTitulo)
                setCuartoTitulo(d !== null ? d : CuartoTitulo);
                if (d !== null) {
                    SavePartners(dato, d, CuartaDescripcion, CuartaImagen)
                }

                break;
            case 5:

                d = prompt('Edit title:', QuintoTitulo)
                setQuintoTitulo(d !== null ? d : QuintoTitulo);
                if (d !== null) {
                    SavePartners(dato, d, QuintaDescripcion, QuintaImagen)
                }

                break;
            case 6:
                d = prompt('Edit title:', SextoTitulo)
                setSextoTitulo(d !== null ? d : SextoTitulo);
                if (d !== null) {
                    SavePartners(dato, d, SextaDescripcion, SextaImagen)
                }

                break;

            case 7:
                d = prompt('Edit title:', PrimerImagen)
                setPrimerImagen(d !== null ? d : PrimerImagen);
                if (d !== null) {
                    SavePartners(1, PrimerTitulo, PrimerDescripcion, d)
                }

                break;
            case 8:
                d = prompt('Edit title:', SegundaImagen)
                setSegundaImagen(d !== null ? d : SegundaImagen);
                if (d !== null) {
                    SavePartners(2, SegundoTitulo, SegundaDescripcion, d)
                }

                break;
            case 9:
                d = prompt('Edit title:', TerceraImagen)
                setTerceraImagen(d !== null ? d : TerceraImagen);
                if (d !== null) {
                    SavePartners(3, TerceroTitulo, TerceraDescripcion, d)
                }


                break;
            case 10:
                d = prompt('Edit title:', CuartaImagen)
                setCuartaImagen(d !== null ? d : CuartaImagen);
                if (d !== null) {
                    SavePartners(4, CuartoTitulo, CuartaDescripcion, d)
                }


                break;
            case 11:
                d = prompt('Edit title:', QuintaImagen)
                setQuintaImagen(d !== null ? d : QuintaImagen);
                if (d !== null) {
                    SavePartners(5, QuintoTitulo, QuintaDescripcion, d)
                }


                break;
            case 12:
                d = prompt('Edit title:', SextaImagen)
                setSextaImagen(d !== null ? d : SextaImagen);
                if (d !== null) {
                    SavePartners(6, SextoTitulo, SextaDescripcion, d)
                }


                break;
            case 13:
                d = prompt('Edit title:', PrimerDescripcion)
                setPrimerDescripcion(d !== null ? d : PrimerDescripcion);
                if (d !== null) {
                    SavePartners(1, PrimerTitulo, d, PrimerImagen)
                }

                break;
            case 14:
                d = prompt('Edit title:', SegundaDescripcion)
                setSegundaDescripcion(d !== null ? d : SegundaDescripcion);
                if (d !== null) {
                    SavePartners(2, SegundoTitulo, d, SegundaImagen)
                }

                break;
            case 15:
                d = prompt('Edit title:', TerceraDescripcion)
                setTerceraDescripcion(d !== null ? d : TerceraDescripcion);
                if (d !== null) {
                    SavePartners(3, TerceroTitulo, d, TerceraImagen)
                }


                break;
            case 16:
                d = prompt('Edit title:', CuartaDescripcion)
                setCuartaDescripcion(d !== null ? d : CuartaDescripcion);
                if (d !== null) {
                    SavePartners(4, CuartoTitulo, d, CuartaImagen)
                }


                break;
            case 17:
                d = prompt('Edit title:', QuintaDescripcion)
                setQuintaDescripcion(d !== null ? d : QuintaDescripcion);
                if (d !== null) {
                    SavePartners(5, QuintaImagen, d, QuintaImagen)
                }

                break;
            case 18:
                d = prompt('Edit title:', SextaDescripcion)
                setSextaDescripcion(d !== null ? d : SextaDescripcion);
                if (d !== null) {
                    SavePartners(6, SextoTitulo, d, SextaImagen)
                }

                break;

            default:

        }
    }
    const Eliminar = (dato) => {
        let d
        switch (dato) {
            case 1:
                setPrimerTitulo("");
                SavePartners(dato, "", PrimerDescripcion, PrimerImagen);
                break;

            case 2:
                setSegundoTitulo("");
                SavePartners(dato, "", SegundaDescripcion, SegundaImagen);
                break;

            case 3:
                setTerceroTitulo("");
                SavePartners(dato, "", TerceraDescripcion, TerceraImagen);
                break;

            case 4:
                setCuartoTitulo("");
                SavePartners(dato, "", CuartaDescripcion, CuartaImagen);
                break;

            case 5:
                setQuintoTitulo("");
                SavePartners(dato, "", QuintaDescripcion, QuintaImagen);
                break;

            case 6:
                setSextoTitulo("");
                SavePartners(dato, "", SextaDescripcion, SextaImagen);
                break;

            case 7:
                setPrimerImagen("");
                SavePartners(1, PrimerTitulo, PrimerDescripcion, "");
                break;

            case 8:
                setSegundaImagen("");
                SavePartners(2, SegundoTitulo, SegundaDescripcion, "");
                break;

            case 9:
                setTerceraImagen("");
                SavePartners(3, TerceroTitulo, TerceraDescripcion, "");
                break;

            case 10:
                setCuartaImagen("");
                SavePartners(4, CuartoTitulo, CuartaDescripcion, "");
                break;

            case 11:
                setQuintaImagen("");
                SavePartners(5, QuintoTitulo, QuintaDescripcion, "");
                break;

            case 12:
                setSextaImagen("");
                SavePartners(6, SextoTitulo, SextaDescripcion, "");
                break;

            case 13:
                setPrimerDescripcion("");
                SavePartners(1, PrimerTitulo, "", PrimerImagen);
                break;

            case 14:
                setSegundaDescripcion("");
                SavePartners(2, SegundoTitulo, "", SegundaImagen);
                break;

            case 15:
                setTerceraDescripcion("");
                SavePartners(3, TerceroTitulo, "", TerceraImagen);
                break;

            case 16:
                setCuartaDescripcion("");
                SavePartners(4, CuartoTitulo, "", CuartaImagen);
                break;

            case 17:
                setQuintaDescripcion("");
                SavePartners(5, QuintaTitulo, "", QuintaImagen);
                break;

            case 18:
                setSextaDescripcion("");
                SavePartners(6, SextoTitulo, "", SextaImagen);
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
                                            <button onClick={(e) => Editar(1)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(1)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(7, e)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(7)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(13)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(13)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(2)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(2)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(8)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(8)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(14)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(14)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(3)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(3)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(9)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(9)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(15)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(15)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(4)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(4)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(10)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(10)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(16)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(16)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(5)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(5)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(11)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(11)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(17)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(17)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(6)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(6)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button onClick={(e) => Editar(12)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(12)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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
                                            <button size={14} onClick={(e) => Editar(18)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit className="text-yellow-400" />
                                            </button>
                                        </div>
                                        <div className="px-3 py-2 text-right text-xs leading-4">
                                            <button onClick={(e) => Eliminar(18)} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
                                                <MdDelete size={14} className="text-red-500" />
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