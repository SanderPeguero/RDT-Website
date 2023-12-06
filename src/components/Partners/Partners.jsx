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

    const [openmodal, setOpenmodal] = useState(true)
    const [band, setband] = useState(true)
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

    const Editar = () => {
        setband(false)
    }
    const Eliminar = () => {
        setPrimerTitulo("")
        setSegundoTitulo("")
        setTerceroTitulo("")
        setCuartoTitulo("")
        setQuintoTitulo("")
        setSextoTitulo("")

        setPrimerImagen("")
        setSegundaImagen("")
        setTerceraImagen("")
        setCuartaImagen("")
        setQuintaImagen("")
        setSextaImagen("")

        setPrimerDescripcion("")
        setSegundaDescripcion("")
        setTerceraDescripcion("")
        setCuartaDescripcion("")
        setQuintaDescripcion("")
        setSextaDescripcion("")
    }
    const pr = () => {
        setstoredData(localStorage.getItem('D'));
    }


    return (
        <div>
            <div className="bg-white relative flex flex-col items-center justify-center mb-[4rem] mt-[2rem]" onClick={pr}>
                {openmodal == false ?

                    <div className='absolute inset-0 flex items-center justify-center z-50' onClick={() => { setOpenmodal(true), setband(true) }}>
                        <div className="flex flex-col justify-center mt-12 overflow-hidden" onClick={STOP}>
                            <div className="relative py-3 w-full md:w-auto">
                                <div className="relative px-4 py-8 bg-white mx-8 md:mx-0 shadow rounded-3xl border border-black p-4 sm:p-8 w-full">
                                    <div className="max-w-screen-md mx-auto">
                                        <div className="flex items-center justify-center space-x-5 mb-4"> {/* Añadido espacio vertical (margin-bottom) */}
                                            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                                <h2 className="leading-relaxed">To Do Detail</h2>
                                                <p className="text-sm text-gray-500 font-normal leading-relaxed">Task Detail</p>
                                            </div>
                                        </div>
                                        <div className="divide-y divide-gray-200">
                                            <div className="py-6 flex flex-col text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                                <div className="flex mb-4"> {/* Added vertical space (margin-bottom) */}
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">1 Title </label>
                                                        <input
                                                            type="text"
                                                            value={PrimerTitulo}
                                                            onChange={(e) => setPrimerTitulo(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">2 Title </label>
                                                        <input
                                                            type="text"
                                                            value={SegundoTitulo}
                                                            onChange={(e) => setSegundoTitulo(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">3 Title </label>
                                                        <input
                                                            type="text"
                                                            value={TerceroTitulo}
                                                            onChange={(e) => setTerceroTitulo(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div> <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">4 Title </label>
                                                        <input
                                                            type="text"
                                                            value={CuartoTitulo}
                                                            onChange={(e) => setCuartoTitulo(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div> <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">5 Title </label>
                                                        <input
                                                            type="text"
                                                            value={QuintoTitulo}
                                                            onChange={(e) => setQuintoTitulo(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col">
                                                        <label className="leading-loose">6 Title</label>
                                                        <input
                                                            type="text"
                                                            value={SextoTitulo}
                                                            onChange={(e) => setSextoTitulo(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>

                                                </div>

                                                <div className="flex mb-4"> {/* Added vertical space (margin-bottom) */}
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">1 Image(url)</label>
                                                        <input
                                                            type="text"
                                                            value={PrimerImagen}
                                                            onChange={(e) => setPrimerImagen(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">2 Image(url)</label>
                                                        <input
                                                            type="text"
                                                            value={SegundaImagen}
                                                            onChange={(e) => setSegundaImagen(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">3 Image(url)</label>
                                                        <input
                                                            type="text"
                                                            value={TerceraImagen}
                                                            onChange={(e) => setTerceraImagen(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div> <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">4 Image(url)</label>
                                                        <input
                                                            type="text"
                                                            value={CuartaImagen}
                                                            onChange={(e) => setCuartaImagen(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div> <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">5 Image(url)</label>
                                                        <input
                                                            type="text"
                                                            value={QuintaImagen}
                                                            onChange={(e) => setQuintaImagen(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col">
                                                        <label className="leading-loose">6 Image(url)</label>
                                                        <input
                                                            type="text"
                                                            value={SextaImagen}
                                                            onChange={(e) => setSextaImagen(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>

                                                </div>

                                                <div className="flex mb-4"> {/* Added vertical space (margin-bottom) */}
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">1 Description</label>
                                                        <input
                                                            type="text"
                                                            value={PrimerDescripcion}
                                                            onChange={(e) => setPrimerDescripcion(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">2 Description</label>
                                                        <input
                                                            type="text"
                                                            value={SegundaDescripcion}
                                                            onChange={(e) => setSegundaDescripcion(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">3 Description</label>
                                                        <input
                                                            type="text"
                                                            value={TerceraDescripcion}
                                                            onChange={(e) => setTerceraDescripcion(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">4 Description</label>
                                                        <input
                                                            type="text"
                                                            value={CuartaDescripcion}
                                                            onChange={(e) => setCuartaDescripcion(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col mr-4"> {/* Added horizontal space (margin-right) */}
                                                        <label className="leading-loose">5 Description</label>
                                                        <input
                                                            type="text"
                                                            value={QuintaDescripcion}
                                                            onChange={(e) => setQuintaDescripcion(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                    <div className="flex-1 flex flex-col">
                                                        <label className="leading-loose">6 Description</label>
                                                        <input
                                                            type="text"
                                                            value={SextaDescripcion}
                                                            onChange={(e) => setSextaDescripcion(e.target.value)}
                                                            className="mt-1 p-2 w-full border rounded-md"
                                                            disabled={band}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Add buttons in the center */}
                                                <div className="flex justify-center mt-4">
                                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
                                                        onClick={Editar}>
                                                        <FaEdit></FaEdit>
                                                    </button>
                                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md"
                                                        onClick={Eliminar}>
                                                        <MdDelete></MdDelete>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ""}


                <div className="">
                    <h2 className="font-roboto text-4xl font-normal leading-14 tracking-tighter text-center text-blue-950  py-4">
                        Partners
                    </h2>
                    <h4 className="font-roboto text-base font-bold leading-5 tracking-tighter text-center mt-4 text-[#374754]">
                        Most calendars are designed for teams.<br /> Slate is designed for freelancers
                    </h4>

                </div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        
                            <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                                <div className="flex flex-col items-center justify-center">
                                    <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                        {PrimerTitulo}
                                    </h6>
                                    <div className="">
                                        <img
                                            src={PrimerImagen}
                                            alt={""}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                           {PrimerDescripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                              <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                                <div className="flex flex-col items-center justify-center">
                                    <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                        {SegundoTitulo}
                                    </h6>
                                    <div className="">
                                        <img
                                            src={SegundaImagen}
                                            alt={""}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                           {SegundaDescripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                                <div className="flex flex-col items-center justify-center">
                                    <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                        {TerceroTitulo}
                                    </h6>
                                    <div className="">
                                        <img
                                            src={TerceraImagen}
                                            alt={""}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                           {TerceraDescripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                                <div className="flex flex-col items-center justify-center">
                                    <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                        {CuartoTitulo}
                                    </h6>
                                    <div className="">
                                        <img
                                            src={CuartaImagen}
                                            alt={""}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                          {CuartaDescripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                                <div className="flex flex-col items-center justify-center">
                                    <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                        {QuintoTitulo}
                                    </h6>
                                    <div className="">
                                        <img
                                            src={QuintaImagen}
                                            alt={""}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                           {QuintaDescripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                                <div className="flex flex-col items-center justify-center">
                                    <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                        {QuintoTitulo}
                                    </h6>
                                    <div className="">
                                        <img
                                            src={QuintaImagen}
                                            alt={""}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                    <p className="text-sm mt-2 font-roboto text-center ml-[3rem] w-[14rem]">
                                           {QuintaDescripcion}
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