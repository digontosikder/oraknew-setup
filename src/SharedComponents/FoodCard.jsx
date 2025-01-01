

const FoodCard = ({ data }) => {
    const {name,image,price,recipe}=data;
    return (
        <div>
            <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                {/* Image */}
                <img
                    src={image} // Replace with your actual image URL
                    alt="Caesar Salad"
                    className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        {recipe}
                    </p>

                    {/* Button */}
                    <button
                        className="mt-4 px-4 py-2 font-medium text-gray-800 rounded-md shadow-md border-b-2 border-yellow-400 bg-gradient-to-t from-yellow-400 to-gray-100  animate-gradient-move bg-[length:100%_200%] hover:from-gray-600 hover:to-yellow-400 transition duration-300"
                    >
                        ADD TO CART
                    </button>


                </div>
            </div>
        </div>
    );
};

export default FoodCard;