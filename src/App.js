import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MealDetail from "./components/MealDetail/MealDetail";
import SelectedMeals from "./components/SelectedMeals/SelectedMeals";
import WishList from "./components/WishList/WishList";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/selectedmeals" element={<SelectedMeals></SelectedMeals>}></Route>
          <Route path="/wishlist" element={<WishList></WishList>}></Route>
          <Route path='/meal/:mealId' element={<MealDetail></MealDetail>}></Route>
        </Routes>
    </div>
  );
}

export default App;
