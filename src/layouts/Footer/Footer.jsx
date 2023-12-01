import Imagen1 from "./Imagen1.png"
import Imagen2 from "./Imagen2.png"
import Imagen3 from "./Imagen3.png"
import Logo1 from "./Logo1.png"
import Logo2 from "./Logo2.png"
import Logo3 from "./Logo3.png"
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const mapStyles = {
    height: '250px',
    width: '100%',
};

const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
};
function Footer() {

    return (
        <div className="pb-5 text-center mb-4 font-roboto text-white">
            <p className="text-4xl text-black pt-2 font-roboto">Contact Us</p>
            <p className="text-xl pt-2 font-roboto text-black">Most calendars are designed for teams. <br />
                Slate is designed for freelancers</p>
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
                        <LoadScript googleMapsApiKey="AIzaSyCQuMGa2ltQrJMrqUYJUaS48CYZcgfPNO8">
                            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
                        </LoadScript>
                    </div>
                </div>


                <div className="flex flex-col  sm:flex-col justify-center pt-10 md:pl-10">
                    <div>
                        <div className="mb-4">
                            <div className="flex items-center flex-wrap">
                                <img
                                    src={Logo1}
                                    alt="Imagen 1"
                                    className="h-8 w-8 mb-3 md:mb-0"
                                />
                                <p className="text-base md:text-lg ml-2 text-black font-roboto font-bold">
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
                                    className="h-8 w-8 mb-3 md:mb-0"
                                />
                                <p className="text-base md:text-lg text-black ml-2 font-roboto font-bold">
                                    (843) 555-0130
                                </p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center flex-wrap">
                                <img
                                    src={Logo3}
                                    alt="Imagen 3"
                                    className="h-8 w-8 mb-3 md:mb-0"
                                />
                                <p className="text-base md:text-lg ml-2 text-black font-roboto font-bold">
                                    willie.jennings@example.com
                                </p>
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
        </div>
    )

}

export default Footer