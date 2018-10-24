import {combineReducers } from 'redux';

const client = [
   {
       name: "John Bells",
       job: "Programmer",
       img: "./publick/img/img6.jpg"
   },
   {
    name: "Bill Walles",
    job: "Economic",
    img: "./publick/img/img2.jpg"
},
{
    name: "Sam Karets",
    job: "Waiter",
    img: "./publick/img/img3.jpg"
},
{
    name: "Kurt Buret",
    job: "Engenear",
    img: "./publick/img/img4.jpg"
},
{
    name: "Gagu Lagala",
    job: "Sinticts",
    img: "./publick/img/img5.jpg"
}
];
const initFilter = '';

const myReducer = (state=client, action) =>{
    if(action.type === "ADD"){
   return state;
}
return state;
}

const filterReducer = (state=initFilter, action)=>{
    if(action.type === "SEARCH"){
        return action.payload;
     }
     return state;
}

export default combineReducers({
    myReducer,
    filterReducer
})