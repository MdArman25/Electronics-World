import ContactFrom from "../Components/ContactFrom";
import GoogleMap from "../Components/GoogleMap";


const Contact = () => {
    return (
        <div>
            <ContactFrom></ContactFrom>
            <div className='w-full'>
    <GoogleMap></GoogleMap>
</div>
        </div>
    );
};

export default Contact;