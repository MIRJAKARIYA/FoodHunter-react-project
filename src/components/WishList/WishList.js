import React, { useEffect, useState } from 'react';
import { removeFromWishList } from '../dbManage/dbManage';
import Wish from '../Wish/Wish';


const WishList = () => {
    const [wishList,setWishList] = useState([]);

    useEffect(()=>{
        const myWishList = localStorage.getItem('wish-list');
            if(myWishList){
                setWishList(JSON.parse(myWishList));
            }
        }
    ,[]);
    const removeMealFromWishList = (id) =>{
        const newWishList = wishList.filter(wish => wish.idMeal !== id)
        setWishList(newWishList);
        removeFromWishList(id)
    }
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-5 p-5'>
            {
                wishList.map(wish => <Wish key={wish.idMeal} removeMealFromWishList={removeMealFromWishList} wish={wish}></Wish>)
            }
        </div>
    );
};

export default WishList;