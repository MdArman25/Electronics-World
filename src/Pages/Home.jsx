import Banner from "../Components/Banner";
import ContactFrom from "../Components/ContactFrom";
import Brand from "./Brand";
import { Toaster } from 'react-hot-toast';
import LatestProducts from "./LetestProducts";
import OurTeam from "../Components/OurTeam";


const Home = () => {
    return (
        <div className="mt-20">
       <Toaster></Toaster>
        <Banner></Banner>
        <Brand></Brand>
        <LatestProducts></LatestProducts>
        <OurTeam></OurTeam>
<ContactFrom></ContactFrom>
        </div>
    );
};

export default Home;