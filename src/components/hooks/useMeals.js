import axios from "axios";
import { useEffect, useState } from "react"
const useMeals = () =>{
    const [meals, setMeals] = useState([]);
    useEffect( ()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(data => setMeals(data.data.meals));
    },[]);   
    return [meals, setMeals];
}

export default useMeals;