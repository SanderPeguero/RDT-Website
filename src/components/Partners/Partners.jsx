import logos_apiary from "./logos_apiary.png"
import logos_androidicon from "./logos_android-icon.png"
import logos_basecamp from "./logos_basecamp.png"
import logos_airbnb from "./logos_airbnb.png"
import logos_apple_app_store from "./logos_apple-app-store.png"
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

    return (
        <div>
            <div className="bg-white flex flex-col items-center justify-center">
                <div className="">
                    <h2 className="font-roboto text-4xl font-normal leading-14 tracking-tighter text-center text-blue-900  py-4">
                        Partners
                    </h2>
                    <h4 className="font-roboto text-base font-bold leading-5 tracking-tighter text-center mt-4 text-[#374754]">
                        Most calendars are designed for teams.<br /> Slate is designed for freelancers
                    </h4>

                </div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {partners.map((product) => (
                            <div key={product.id} className="group relative w-56 h-72 md:w-auto md:h-auto mx-12 my-8">
                                <div className="flex flex-col items-center justify-center">
                                    <h6 className="font-roboto text-xs font-bold leading-5 tracking-tighter text-center my-8">
                                        {product.name}
                                    </h6>
                                    <div className="">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div className="font-roboto text-base font-normal leading-7 tracking-tighter text-center mt-6">
                                        <p className="lg:text-lg">
                                            Slate helps you see how <br className="" /> many more days you need <br className="" /> to work to reach your <br className="" /> financial goal for <br className="" /> the month and year.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="w-[236px] h-[65px] p-[16px, 0px] rounded-full bg-blue-500 text-white font-roboto font-semibold text-lg leading-[33px] tracking-[0.1px] text-center">
                    Try For Free
                </button>

            </div>
        </div>
    )

}

export default Partners