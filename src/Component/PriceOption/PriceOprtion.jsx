import Features from "../Fratures/Features";

const PriceOption = ({option}) => {
    const{name,price,features}=option
    return (
        <div className="bg-blue-500 rounded-xl p-4 text-white flex flex-col">
            <h2 className="text-center">
                <span className="text-2xl font-bold ">{price}</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                features.map((feature,idx)=><Features key={idx} feature={feature}></Features>)
                } 
            </div>
           
            <button className="bg-green-600 p-4 min-w-full rounded-2xl mt-4 hover:bg-red-800 ">Buy Now</button>
        </div>
    );
};

export default PriceOption;