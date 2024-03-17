import { IMG_URL } from "./utils/constants";

const RestCard=(props)=>{
    console.log(props)
    // console.log(props.resData.data.name)
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId}=props.resData.info
    return(

        <div className='rest-card'>
            <div className='rest-img'>
                <img src={ IMG_URL+ cloudinaryImageId} />
            </div>
            <div className='rest-info'>
                <h3>{name}</h3>
                <h4>{cuisines.join(',')}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </div>

    )
}


export default RestCard;