import TicketSystem from "./Ticket System Mockup.png";
import background2 from "./background.jpg";
function Hero1() {
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
                    <img
                        src={TicketSystem}
                        className="w-[300px] md:w-[700px] mx-[8rem] md:mx-[8rem] pt-[3rem]"
                    />
                    <div className="flex flex-col mt-[4rem]">
                        <h1 className="font-roboto font-extrabold text-5xl leading-66 tracking-[0.2px] text-white w-[321px] h-[131px]">
                            We focus on ergonomics
                        </h1>
                        <h4 className="font-roboto font-bold text-base leading-20 tracking-[0.2px] text-white w-[298px] h-[40px]">
                            Most calendars are designed for teams. Slate is designed for freelancers
                        </h4>
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