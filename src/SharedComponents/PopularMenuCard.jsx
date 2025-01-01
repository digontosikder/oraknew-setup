

const PopularMenuCard = ({item}) => {
    const {name,image,price,recipe}=item;
    console.log(item);
    return ( 
        <div className="flex items-center gap-3 mb-3 mr-3">
            <div>
                <img className="w-[118px] h-[104px]" src={image} alt="" />
            </div>
            <div>
                <h1 className="uppercase text-xl">{name}----------</h1>
                <p className="font-bold">{recipe}</p>
            </div>
            <div>
                <h1 className="text-yellow-400">{price}</h1>
            </div>
            
        </div>
    );
};

export default PopularMenuCard;