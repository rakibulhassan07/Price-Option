import PriceOption from "../PriceOption/PriceOprtion";


const PriceOptions = () => {
    const priceOptions=[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$50/month",
          "features": [
            "Access to all equipment",
            "Access to group fitness classes",
            "Personal trainer session (1/month)",
            "Sauna access",
            "Locker with key"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": "$80/month",
          "features": [
            "All features of Premium Membership",
            "Unlimited personal trainer sessions",
            "Access to swimming pool",
            "Towel service"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-7xl">Best Price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6  ">
                 {
              priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
                 }
            </div>
           
        </div>
    );
};

export default PriceOptions;