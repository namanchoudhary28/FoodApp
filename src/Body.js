import restaurantList from "./utils/mockData";
import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "./utils/constants";
import { Link } from "react-router-dom";


const Body=()=>{
    const [listOfRest,setlistOfRest]=useState([])
    const [searchText,setsearchText]=useState("")
    const [filterList, setfilterList]=useState([])

    useEffect(()=>{
        fetchData()
    }
    ,
    [])

    const fetchData=async ()=>{
        const data=await fetch(swiggy_api_URL);
        const json=await data.json()
        // setlistOfRest(json.data.cards[2].data.data.cards)
        setlistOfRest(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setfilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    return (
        <div className='body'>
           
            <div className='filter'>
            <div className="search">
                <input type="text" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value)
                }} />
                <button className="search-btn" onClick={()=>{
                    const filterRest=listOfRest.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    console.log(filterRest)
                    setfilterList(filterRest)
                }}>Search</button>
            </div>
                <button className="filter-btn" onClick={()=>{
                    
                    const filterList=listOfRest.filter((res)=>{
                        return  res.info.avgRating>4.3
                    })
                    console.log(filterList)
                    
                    setlistOfRest(filterList)
                    setfilterList(filterList)
                }} >Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                    {
                        // console.log(filterList)
                        filterList.map((restaurant)=>
                        {
                            // console.log(restaurant)
                            return <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}><RestCard  resData={restaurant} /> </Link>
                            return    
                        })
                    }


                           
                

            </div>
        </div>
    )
}


export default Body;