import React, { useEffect, useState } from 'react';
import {AiTwotoneHeart} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { addToWishList, removeFromWishList } from '../dbManage/dbManage';
const Meal = ({meal}) => {
    const [click, setClick] = useState(0)
    const {strMealThumb, strMeal, idMeal, strInstructions} = meal;
    const navigate = useNavigate();
    useEffect(()=>{
        if(click>0 && click % 2 !==0){
            addToWishList(meal);
        }
        else if(click>0 && click % 2 ===0){
            removeFromWishList(idMeal);
        }
    },[click,idMeal,meal]);
    useEffect(()=>{
        const getWishList = localStorage.getItem('wish-list');
        if(getWishList){
            const myWish = JSON.parse(getWishList);
            const isExist = myWish.find(wish => wish.idMeal === idMeal)
            if(isExist){
                setClick(1);
            }
        }   
    },[idMeal])
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
            <img className="rounded-t-lg" src={strMealThumb} alt="" />
            <div className="p-5">
                <div className='flex justify-between'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strMeal}</h5>
                    <button onClick={()=>setClick(click+1)} className={click % 2 !== 0? 'text-red-700': 'text-black'}><AiTwotoneHeart></AiTwotoneHeart></button>
                </div>
                <p title={strInstructions} className="mb-3 font-normal text-gray-700 dark:text-gray-400">{strInstructions.length > 100?strInstructions.slice(0,100)+'...':strInstructions}</p>
                <p>Price: <span>$</span>{idMeal.slice(0,3)}</p>
                <div className='flex justify-center mt-5'>
                    <button onClick={()=>navigate(`/meal/${idMeal}`)}  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2">
                        see detail
                    </button>
                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meal;