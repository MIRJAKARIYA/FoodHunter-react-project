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
            <input className='fixed top-4 right-4 z-10 bg-white w-[350px]' type="text" onChange={searchText}/>
            <h1>Total found: {meals?.length}</h1>
            {
                meals?<div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mt-20'>
                {
                    meals?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                } 
            </div>: 'not found'
            }
        </>
    );
};

export default Home;