import banner from "../assets/home/featured.jpg";
import SectionTitle from "../SharedComponents/SectionTitle";

const OverMenuBanner = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`,
            }}
            className="bg-cover bg-center h-[700px] mb-28 "
        >
            <div className="text-center text-white py-14 mt-[100px]">
                <SectionTitle subhedding={"Check it out"} hedding={"FROM OUR MENU"}></SectionTitle>
            </div>
            <div>
                <div className="hero bg-transparent w-[60%] mx-auto text-white">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={banner}
                            className="w-[600px] rounded-lg shadow-2xl mr-10" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6 w-[650px] ">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn bg-transparent text-white  border-b-4 hover: bg-white hover:text-black hover:font-bold">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverMenuBanner;
