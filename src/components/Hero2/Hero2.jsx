import container from "./container.png"

//RW-3
function Hero2() {

    return (
        <div className="flex flex-col items-center justify-center mt-[6rem]">
            <div className="flex items-center p-2 gap-4">
                <h2 className="font-roboto font-normal text-4xl leading-10 tracking-tighter text-center text-black w-80 ">
                    Lightning fast<br />
                    prototyping
                </h2>
            </div>
            <div>
                <h4 className="font-roboto font-semibold text-base leading-5 tracking-tighter text-center text-gray-700 mt-4 md:mt-2">
                    Most calendars are designed for teams.<br />
                    Slate is designed for freelancers
                </h4>
            </div>
            <div className="w-72 h-28 p-2 gap-4 mt-8 md:mt-16 flex items-center justify-center">
                <button className="w-60 h-16 p-4 rounded-full bg-[#38A3F1] hover:bg-blue-500 text-white font-roboto font-semibold text-base leading-8 tracking-tighter text-center">
                    Try For Free
                </button>
            </div>
            <div className="mt-8 md:mt-4">
                <img src={container} className="w-120 md:w-150" alt="Container" />
            </div>
        </div>
    )

}

export default Hero2