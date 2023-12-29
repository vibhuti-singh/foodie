import { createContext, useReducer } from "react";
import CardReducer from "./CardReducer";

const CardContext = createContext()
export const CardProvider =({children})=>{
const initialState ={
    items : [
{id: 1,
Price: 50,
Rating: 4.5,
Dish: 'Rajma',
quantity:1,
img:"https://static.toiimg.com/thumb/85150254.cms?imgsize=257087&width=800&height=800"
},
{id: 1001,
 Dish: "Butter Chicken",
Price: 400,
quantity:1,
 img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_4r2jYRaSuwoBz9LCpA8uk0MWLrhIQXkeQ&usqp=CAU",
Rating: 4.5 
},
{id: 1002,
  
    Dish: 'Biryani',
    Price: 250,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9meeHucFddv8b_fkEfhudkw-kD61jQ5c9cg&usqp=CAU",
    Rating: 4.7},
    {id: 1003,
    
    Dish: 'Paneer Tikka',
    Price: 200,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIBzGv7_RmwSZBUZ-rQ0M5UO6stGzHHUrxA&usqp=CAU",
    Rating: 4.4},
    {id: 1004,
    
    Dish:' Masala Dosa',
    Price: 150,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePJj1uodfLLk0SyLtKx78IxGVoFanlRrHjQ&usqp=CAU",
    Rating: 4.2},
    {id: 1005,
    
    Dish: 'Chole Bhature',
    Price: 170,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_EryY8ODjR1DNs2WZvO0cSs8YGTUtmCe2Q&usqp=CAU",
    Rating: 4.3},
    {id: 1006,
    
    Dish: 'Tandoori Chicken',
    Price: 350,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOFK8gb7JofOahaRCFEftyf0TNYwa_YNTDQ&usqp=CAU",
    Rating: 4.6},
    {id: 1007,
    
    Dish: 'Rogan Josh',
    Price: 200,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6B1g_hOTGj6hx9A5mwU6T0NftYuzTpl07Yg&usqp=CAU",
    Rating: 4.5},
    {id: 1008,
    
    Dish: 'Samosa',
    Price: 45,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqIjk2gLBu_lQOZ91hn0JwH2qMjp_PqIT9NA&usqp=CAU",
    Rating: 4.0},
    {id: 1009,
    
    Dish: 'Aloo Paratha',
    Price: 70,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6IqX5LP9D38t8Ez9GWne1u5j5hxB-g_xY1g&usqp=CAU",
    Rating: 4.2},
    {id: 1010,
    
    Dish: 'Malai Kofta',
    Price: 200,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58tUWjkJhzonGFdKYKLL6dSoxY-r2sL0PYQ&usqp=CAU",
    Rating: 4.4},
    {id: 1011,
    
    Dish: 'Chicken Tikka Masala',
    Price: 250,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4v8x1_w1hWgPNIwuKO0zGDgLK5ZGY5VFFRw&usqp=CAU",
    Rating: 4.6},
    {id: 1012,
    Dish: 'Palak Paneer',
    Price: 200,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNV4qgKndU_CRGJTX5w3DSvRGw3lGywsmMQ&usqp=CAU",
    Rating: 4.3},
    {id: 1013,
    
    Dish: 'Tandoori Naan',
    Price: 20,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbnNzALjW_eDK3uCu7JzLzQE9vjOvGa4R-Q&usqp=CAU",
    Rating: 4.1},
    {id: 1014,
    
    Dish: 'Dhokla',
    Price: 80,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqGh72sYu5aYHlcmdjVr5_n9WVFce46LHrA&usqp=CAU",
    Rating: 4.0},
    {id: 1015,
    
    Dish: 'Vada Pav',
    Price: 45,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwDO1W1JQ5qbUWHx61IVKoc-3sl-8jHif0A&usqp=CAU",
    Rating: 4.2},
    {id: 1016,
    
    Dish:' Chicken Korma',
    Price: 350,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDObuTj6jt4pf8v6_CvRiyCVjGKiP2LL-Qg&usqp=CAU",
    Rating: 4.5},
    {id: 1017,
    
    Dish: 'Mutton Curry',
    Price: 400,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFeEOIU8yZxnMXOvactm7FEe_7Kxmdc7ShhA&usqp=CAU",
    Rating: 4.4},
    {id: 1018,
    
    Dish: 'Pani Puri',
    Price: 25,
    quantity:1,
    img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeSSIWgCzUzH36uUJ044soFQ3EYxszJoTQg&usqp=CAU",
    Rating: 4.2},
    {id: 1019,
    
    Dish: 'Rasgulla',
    Price: 30,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyebytKQ4_3CjSqehsmAzI19wdzdXbabRhIw&usqp=CAU",
    Rating: 4.1},
    {id: 1020,
    
    Dish: 'Gulab Jamun',
    Price: 30,
    quantity:1,
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AbQBuLb938N9qeTs-O8mlxxnSOVWxJVDmw&usqp=CAU",
    Rating: 4.3},
    
    ],
};
const [state, dispatch]=useReducer(CardReducer, initialState)
    return(
        <CardContext.Provider value={{...state, dispatch}}>
{children}
        </CardContext.Provider>
    )
}




export default CardContext