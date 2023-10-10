import { useLoaderData } from "react-router-dom";


const Phones = () => {
    const phones = useLoaderData()
    return (
        <div>
            <h1>here the all number of data is {phones.length}</h1>
        </div>
    );
};

export default Phones;