import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MealDetail = () => {
    const {mealId} = useParams();
    const [meal, setMeal] = useState({})
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(data => setMeal(data.data.meals[0]))
    },[mealId]);
    console.log(meal)
    
    return (
        <>
            <div className='w-3/4 mx-auto mt-10 min-h-[520px] flex md:flex-row flex-col md:justify-between p-5 items-center shadow-2xl'>
            <div className='md:w-1/2 mr-5'>
                <img src={meal.strMealThumb} className='rounded-lg' alt="" />
            </div>
            <div className='md:w-1/2'>
                <h4 className='text-center text-3xl'>Name: {meal.strMeal}</h4>
                <h6 className='text-center'>Category: {meal.strCategory}</h6>
                <div className='mt-5'>
                    <table className='mx-auto'>
                    <tbody>
                    <tr className='border-2 border-slate-600'>
                            <th className='border-2 border-slate-500 p-1'>Ingredient1</th>
                            <th className='border-2 border-slate-500 p-1'>Ingredient2</th>
                            <th className='border-2 border-slate-500 p-1'>Ingredient2</th>
                            <th className='border-2 border-slate-500 p-1'>Ingredient3</th>
                        </tr>
                        <tr className='border-2 border-slate-600'>
                            <td className='border-2 border-slate-500 p-1'>{meal.strIngredient1}</td>
                            <td className='border-2 border-slate-500 p-1'>{meal.strIngredient2}</td>
                            <td className='border-2 border-slate-500 p-1'>{meal.strIngredient3}</td>
                            <td className='border-2 border-slate-500 p-1'>{meal.strIngredient4}</td>
                        </tr>
                        <tr className='border-2 border-slate-600'>
                            <td className='border-2 border-slate-500 p-1'>{meal.strIngredient5}</td>
                            <td className='border-2 border-slate-500 p-1'>{meal.strIngredient6}</td>
                            <td className='border-2 border-slate-500 p-1'>{meal.strIngredient7}</td>
                            <td className='border-2 border-slate-500 p-1'>{meal.strIngredient8}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <p className='text-center text-2xl mt-4'>Instruction</p>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
        <div className='text-center mt-10'>
            <Link to={'/home'} className='bg-green-400 px-4 py-2 rounded-md text-white'>Meals</Link>
        </div>
        </>
    );
};

export default MealDetail;