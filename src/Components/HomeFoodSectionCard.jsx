import { useEffect, useState } from "react";
import FoodCard from "../SharedComponents/FoodCard";


const HomeFoodSectionCard = () => {
    const [item,setItem]=useState([])
        useEffect(()=>{
            fetch("manu.json")
            .then(res=>res.json())
            .then(data=>{
                const popular = data.filter(item=>item.category=== "popular")
                setItem(popular)
    
            })
        },[])
    return (
        <div className="grid grid-cols-3 w-[55%] gap-4 mx-auto">
            {
                item.map((data,idx)=><FoodCard data={data} key={idx}></FoodCard>)
            }
        </div>
    );
};

export default HomeFoodSectionCard;