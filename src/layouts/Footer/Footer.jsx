import Imagen1 from "./Imagen1.png"
import Imagen2 from "./Imagen2.png"
import Imagen3 from "./Imagen3.png"
import Logo1 from "./Logo1.png"
import Logo2 from "./Logo2.png"
import Logo3 from "./Logo3.png"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react"
import { useContextRDT } from "../../Context"
const mapStyles = {
    height: '250px',
    width: '100%',
};



const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
};
function Footer() {
    const {
        ContactInfo,
        EditContactAddress,
        EditContactPhone,
        EditContactEmail
    } = useContextRDT()
    const [text, setText] = useState({
        phone: '(843) 555-0130',
        email: 'willie.jennings@example.com',
        address: ' 6386 Spring St undefined Anchorage,Georgia 12473 United StatesFastest'
    });

    const [Page, setPage] = useState([
        {
            id: 1,
            page: "Eleanor Edwards"
        },
        {
            id: 2,
            page: "Ted Robertson"
        },
        {
            id: 3,
            page: "Annette Russell"
        },
        {
            id: 4,
            page: "Jennie Mckinney"
        },
        {
            id: 5,
            page: "Gloria Richards"
        },
    ])

    const authAdmin = localStorage.getItem('D')

    const handleEditPhone = () => {
        const newPhone = prompt('Edit phone:', ContactInfo.Phone);
        if (newPhone !== null) {
            EditContactPhone(newPhone)
        }
    }

    const handleEditEmail = () => {
        const newEmail = prompt('Edit email:', ContactInfo.Email);
        if (newEmail !== null) {
            EditContactEmail(newEmail)
        }
    }

    const handleEditAddress = () => {
        const newAddres = prompt('Edit addres: ', ContactInfo.Address)
        if (newAddres !== null) {
            EditContactAddress(newAddres)
        }
    }

    const handleEditPage = (id) => {
        const pageToUpdate = Page.find(page => page.id === id);
        const newPages = prompt('Edit Pages:', pageToUpdate.page);
        if (newPages !== null) {
            const updatedPages = Page.map(page => {
                if (page.id === id) {
                    return { ...page, page: newPages };
                }
                return page;
            });
            setPage(updatedPages);
        }
    }



    const [selectedLocation, setSelectedLocation] = useState(null);
    const [savedLocation, setSavedLocation] = useState(null);
    const [locationDetails, setLocationDetails] = useState('');

    const handleMapClick = (event) => {
        setSelectedLocation({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
    };

    const handleSaveLocation = () => {
        if (selectedLocation) {
            setSavedLocation(selectedLocation);
            console.log(selectedLocation)
            // setSelectedLocation(null); 
        }
    };
    useEffect(() => {
        if (savedLocation) {
            // Servicio de geocodificación inversa para obtener detalles de ubicación
            //Nota: La Api key no tiene permision de geocodificación
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: savedLocation }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    setLocationDetails(results[0].formatted_address);
                    console.log(locationDetails)
                }
            });
        }
    }, [savedLocation]);




    return (
        <div className="pb-5 text-center mb-4 font-roboto text-white">
            <div className="flex flex-col pt-10 pl-5 pr-5  mt-4 sm:flex-row sm:justify-center">
                <div className="w-full md:w-[250px] mt-10 p-6 md:p-12 bg-white ">
                    {/* Texto principal */}
                    <h1 className="text-2xl font-bold mb-4 text-black">Pages</h1>

                    {/* Textos secundarios */}
                    <p className="mb-4 text-black">Eleanor Edwards</p>
                    <p className="mb-4 text-black">Ted Robertson</p>
                    <p className="mb-4 text-black">Annette Russell</p>
                    <p className="mb-4 text-black">Jennie Mckinney</p>
                    <p className="mb-4 text-black">Gloria Richards</p>
                </div>

                <div className="mt-10 p-6 md:p-12">
                    <div className="w-full md:w-[550px] rounded-md overflow-hidden">
                        {authAdmin === null ? <LoadScript googleMapsApiKey="AIzaSyCQuMGa2ltQrJMrqUYJUaS48CYZcgfPNO8">
                            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
                        </LoadScript> :
                            <>

                                {selectedLocation ? (
                                    <div className="px-3 py-2 text-left text-xs leading-4">
                                        {authAdmin === null ? "" :
                                            <button onClick={handleSaveLocation} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>}
                                    </div>
                                ) : (
                                    <>
                                        {authAdmin === null ? "" :
                                            <span className="text-black mb-[4rem]">Select a location</span>}
                                    </>

                                )}
                                <LoadScript googleMapsApiKey="AIzaSyCQuMGa2ltQrJMrqUYJUaS48CYZcgfPNO8">
                                    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={{ lat: 40.712776, lng: -74.005974 }} onClick={handleMapClick}>
                                        {selectedLocation && (
                                            <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
                                        )}
                                    </GoogleMap>
                                </LoadScript>
                                <div>

                                    {savedLocation && (
                                        <p>Ubicación guardada: Latitud: {savedLocation.lat}, Longitud: {savedLocation.lng}</p>
                                    )}
                                </div>
                            </>
                        }
                    </div>
                </div>


                <div className="flex flex-col  sm:flex-col justify-center pt-10 md:pl-10">
                    <div>
                        <div className="mb-4 mr-8">
                            <div className="flex items-center flex-wrap">
                                <div className="flex flex-row items-center justify-between">
                                    <img
                                        src={Logo1}
                                        alt="Imagen 2"
                                        className="h-6 mb-3 md:mb-0"
                                    />
                                    <p className="text-base md:text-lg ml-2 font-roboto font-bold text-black">
                                        {ContactInfo.Address.split(/,\s*/).map((part, index) => (
                                            <span key={index} style={{ display: 'block' }}>
                                                {part}
                                            </span>
                                        ))}
                                    </p>

                                    {authAdmin === null ? "" :
                                        <div className="px-3 py-2 text-right  text-xs leading-4">
                                            <button onClick={handleEditAddress} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                    }
                                </div>
                                {/* <p className="text-base md:text-lg ml-2 text-black font-roboto font-bold">
                                    6386 Spring St undefined Anchorage,
                                    <br />
                                    Georgia 12473 United StatesFastest
                                </p> */}
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center flex-wrap">

                                <div className="flex flex-row items-center justify-between">
                                    <img
                                        src={Logo2}
                                        alt="Imagen 2"
                                        className="h-6 mb-3 md:mb-0"
                                    />
                                    <p className="text-base md:text-lg text-black ml-2 font-roboto font-bold">
                                        {ContactInfo.Phone}

                                    </p>
                                    {authAdmin === null ? "" :
                                        <div className="px-3 py-2 text-right  text-xs leading-4">
                                            <button onClick={handleEditPhone} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                    }
                                </div>
                                {/* <p className="text-base md:text-lg text-black ml-2 font-roboto font-bold">
                                    (843) 555-0130
                                </p> */}
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center flex-wrap">

                                <div className="flex flex-row items-center justify-between">
                                    <img
                                        src={Logo3}
                                        alt="Imagen 3"
                                        className="h-6 mb-3 md:mb-0"
                                    />
                                    <p className="text-base md:text-lg ml-2 text-black font-roboto font-bold">
                                        {ContactInfo.Email}
                                    </p>
                                    {authAdmin === null ? "" :
                                        <div className="px-3 py-2 text-right  text-xs leading-4">
                                            <button onClick={handleEditEmail} className="px-3 py-1 border border-blue-500 text-blue-500 rounded transition duration-300 hover:bg-yellow-400 hover:text-white focus:outline-none">
                                                <FaEdit size={14} className="text-yellow-400" />
                                            </button>
                                        </div>
                                    }
                                </div>
                                {/* <p className="text-base md:text-lg ml-2 text-black font-roboto font-bold">
                                    willie.jennings@example.com
                                </p> */}
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-row pt-10 mt-4 sm:flex-row sm:justify-center">
                                <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4">
                                    <div className="flex items-center flex-wrap">
                                        <img
                                            src={Imagen1}
                                            alt="Imagen 1"
                                            className="h-10 mb-3 sm:mb-0"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-4">
                                    <div className="flex items-center flex-wrap">
                                        <img
                                            src={Imagen2}
                                            alt="Imagen 2"
                                            className="h-10 mb-3 sm:mb-0"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center mb-4 sm:mb-0 sm:ml-4">
                                    <div className="flex items-center flex-wrap">
                                        <img
                                            src={Imagen3}
                                            alt="Imagen 3"
                                            className="h-10 mb-3 sm:mb-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer