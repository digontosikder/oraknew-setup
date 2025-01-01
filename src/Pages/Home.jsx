import Banner from "../Components/Banner";
import ContactComponents from "../Components/ContactComponents";
import HomeFoodSectionCard from "../Components/HomeFoodSectionCard";
import HomeSwiper from "../Components/HomeSwiper";
import OverMenuBanner from "../Components/OverMenuBanner";
import PopularMenu from "../Components/PopularMenu";
import ShortBanner from "../Components/ShortBanner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeSwiper></HomeSwiper>
            <ShortBanner></ShortBanner>
            <PopularMenu></PopularMenu>
            <ContactComponents></ContactComponents>
            <HomeFoodSectionCard></HomeFoodSectionCard>
            <OverMenuBanner></OverMenuBanner>

        </div>
    );
};

export default Home;