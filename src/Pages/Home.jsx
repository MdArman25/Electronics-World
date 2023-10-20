import Banner from "../Components/Banner";
import ContactFrom from "../Components/ContactFrom";
import Brand from "./Brand";


const Home = () => {
    return (
        <div className="mt-20">
        <Banner></Banner>
        <Brand></Brand>
<ContactFrom></ContactFrom>
        </div>
    );
};

export default Home;