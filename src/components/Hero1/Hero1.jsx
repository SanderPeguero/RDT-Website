import TicketSystem from "./Ticket System Mockup.png";
import background2 from "./background.jpg";
//RW-11
function Hero1() {
    return (
        <div className="relative">
            <img src={background2} className="w-full  h-[45rem] " alt="Background" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                    <div className="mt-[4rem] block md:hidden">
                        <button className="w-[200px] h-[50px] p-[12px, 0px] rounded-full bg-blue-500 text-white font-roboto font-semibold text-base leading-[28px] tracking-[0.1px] text-center">
                            Try For Free
                        </button>
                    </div>
                    <img src={TicketSystem} className="m-[1rem] md:m-[1rem]" />
                    <div className="flex flex-col mt-[1rem]">
                        <h1 className="font-roboto font-extrabold text-3xl leading-50 tracking-[0.2px] text-white w-[260px] h-[100px]">
                            We focus on ergonomics
                        </h1>
                        <h4 className="font-roboto font-bold text-sm leading-16 tracking-[0.2px] text-white w-[240px] h-[30px]">
                            Most calendars are designed for teams. Slate is designed for freelancers
                        </h4>
                        <div className="mt-[3rem] hidden md:block">
                            <button className="w-[200px] h-[50px] p-[12px, 0px] rounded-full bg-blue-500 text-white font-roboto font-semibold text-base leading-[28px] tracking-[0.1px] text-center">
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
