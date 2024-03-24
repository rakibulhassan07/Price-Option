
import { AiFillCheckCircle } from "react-icons/ai";
const Features = ({feature}) => {
    return (
        <div>
            <p className="flex items-center ml-4">< AiFillCheckCircle className="text-green-500 mr-4" ></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

export default Features;