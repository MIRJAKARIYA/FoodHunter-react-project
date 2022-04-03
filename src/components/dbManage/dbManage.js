const addToWishList = (meal) =>{
    let myWishList=[];
    const savedWishList = localStorage.getItem('wish-list');
    if(savedWishList){
        myWishList = JSON.parse(savedWishList);
    }
    const mylist = myWishList.find(wish => wish.idMeal === meal.idMeal)
    if(!mylist){
        myWishList.push(meal);
        localStorage.setItem('wish-list',JSON.stringify(myWishList));
    }
    
}

const removeFromWishList = (id) =>{
    const myWishList = localStorage.getItem('wish-list');
    if(myWishList){
        const parsedWishList = JSON.parse(myWishList);
        const rest = parsedWishList.filter(pd => pd.idMeal !== id);
        localStorage.setItem('wish-list',JSON.stringify(rest));
    }
}

export {addToWishList,removeFromWishList}