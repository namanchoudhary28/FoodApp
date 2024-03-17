import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu_api_url } from "./utils/constants";
const RestaurantMenu=()=>{


let {resId}=useParams()

console.log(resId)
useEffect(()=>{
    fetchMenu()
},[])
const fetchMenu=async ()=>{
    const data=await fetch(menu_api_url+resId);
    const json=await data.json()
    console.log(json)
    console.log("hello")
   
}


    return (
        <div>Rest-Menu :{resId} </div>
        
    )
}


export default RestaurantMenu;