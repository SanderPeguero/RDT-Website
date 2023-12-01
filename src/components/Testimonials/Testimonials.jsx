import Brands from "./Brands.png"
import avatar from "./avatar.png"
//RW-6
function Testimonials() {

    return (
        <div className="flex flex-col items-center justify-center">

            <div className="text-center mb-24">
                <h2 className="font-roboto text-4xl font-normal leading-14 tracking-tighter text-[#252B42]">
                    Testimonials
                </h2>
            </div>

            <div className="flex flex-col items-center justify-center">
                <img
                    src={Brands}
                    className="mb-16"
                />
                <h4 className="font-roboto text-base font-bold leading-5 tracking-tighter text-center text-[#374754] mb-12">
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple <br />way to plan their schedule.
                </h4>

                <div className="flex flex-row ">
                    <img
                        src={avatar}
                        className="mr-4"
                    />
                    <div className="flex flex-col">
                        <div>
                            Organize across
                        </div>
                        <div>
                            Ui designer
                        </div>
                    </div>

                </div>
                <button className="mt-16 w-[236px] h-[65px] p-[16px, 0px] rounded-full bg-blue-500 text-white font-roboto font-semibold text-lg leading-[33px] tracking-[0.1px] text-center">
                    More Testimonials
                </button>
            </div>
        </div>
    )

}

export default Testimonials