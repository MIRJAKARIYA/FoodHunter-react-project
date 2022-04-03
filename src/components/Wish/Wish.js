import React from "react";
import { useNavigate } from "react-router-dom";

const Wish = ({ wish,removeMealFromWishList }) => {
  const { strMealThumb, strMeal, idMeal, strYoutube } = wish;
  const navigate = useNavigate();
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 pt-2">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={strMealThumb}
          alt=""
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {strMeal}
        </h5>
        <a
          className="text-red-900 text-xl underline hover:text-red-700"
          href={strYoutube}
        >
          watch tutorial
        </a>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <button
            onClick={() => navigate(`/meal/${idMeal}`)}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            see details
          </button>
          <button onClick={()=>removeMealFromWishList(idMeal)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wish;
