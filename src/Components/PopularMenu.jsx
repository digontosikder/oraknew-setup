import { useEffect, useState } from "react";
import PopularMenuCard from "../SharedComponents/PopularMenuCard";
import SectionTitle from "../SharedComponents/SectionTitle";


const PopularMenu = () => {
    const [item,setItem]=useState([])
    useEffect(()=>{
        fetch("manu.json")
        .then(res=>res.json())
        .then(data=>{
            const popular = data.filter(item=>item.category=== "popular")
            setItem(popular)

        })
    },[])
    console.log(item);
    return (
       <section className="w-[65%] mx-auto gap-3">
        <div className="mb-10">
            <SectionTitle subhedding={"Chick it out"} hedding={"FROM OUR MENU"}></SectionTitle>
        </div>
         <div className="grid grid-cols-2 mb-10">
            {
                item.map((data,idx)=><PopularMenuCard item={data} key={idx}></PopularMenuCard>)
            }
        </div>
       </section>
    );
};

export default PopularMenu;