import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../reducer/productReducer'
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products"
const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts: [],
    isSingleLoading:false,
    singleProduct:{},
}
const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async(url)=>{
        dispatch({type:"SET_LOADING"})
        try{
            const resp = await axios.get(url)
            const products = await resp.data;
            dispatch({type: "SET_API_DATA", payload: products});
        }catch(error){
            dispatch({type: "API_ERROR"})
        }
    };

    //get single product
    const getSingleProduct = async (url)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try{
            const resp = await axios.get(url)
            const Singleproduct = await resp.data;
            dispatch({type: "SET_SINGLE_PRODUCT", payload: Singleproduct});
        }catch(error){
            dispatch({type: "SET_SINGLE_ERROR"});
        }
    }


    useEffect(()=>{
        getProducts(API);
    },[])


    return <AppContext.Provider value={{...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
}

//custom hooks

const useProductContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider, AppContext, useProductContext};