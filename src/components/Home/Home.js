import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useMeals from '../hooks/useMeals';
import Meal from '../Meal/Meal';

const Home = () => {
    const [meals, setMeals] = useMeals();
    const [search, setSearch] = useState('')
    const searchText = (e) =>{
        setSearch(e.target.value);
    }
    useEffect(()=>{
        if(search !== ''){
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(data => setMeals(data.data.meals));
        }
    },[search,setMeals])
    return (
        <>
            <input className='fixed top-4 right-4 z-10 bg-white w-[350px]' type="text" placeholder='🔎 search meal' onChange={searchText}/>
            <h1 className='text-center text-2xl mt-5'>Total found: {meals?.length ||0}</h1>
            {
                meals?<div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mt-20'>
                {
                    meals?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                } 
            </div>: <h1 className='text-4xl text-center mt-16'>Sorry no match found😢</h1>
            }
        </>
    );
};

export default Home;