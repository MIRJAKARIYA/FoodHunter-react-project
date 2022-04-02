import React, { useState } from 'react';
import {AiTwotoneHeart} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Meal = ({meal}) => {
    const [click, setClick] = useState(false)
    const {strMealThumb, strMeal, idMeal, strInstructions} = meal;
    const navigate = useNavigate();
    console.log(meal)
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
            <img className="rounded-t-lg" src={strMealThumb} alt="" />
            <div className="p-5">
                <div className='flex justify-between'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strMeal}</h5>
                    <button onClick={()=>setClick(!click)} className={click? 'text-red-700': 'text-black'}><AiTwotoneHeart></AiTwotoneHeart></button>
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