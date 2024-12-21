import { createContext, useEffect } from "react";
// import { products } from "../assets/assets"; imports product from local db
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    //state vars

    const currency = '$';
    const delivery_fee = 10;

    //connect with backend
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    console.log('Backend URL:', backendUrl);


    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false); //show or hide searchbar

    const [cartItems, setCartItems] = useState({});

    //to get product from backend server..
    const [products, setProducts] = useState([]);
    //token
    const [token, setToken] = useState('');

    const navigate = useNavigate();



    //
    const addToCart = async (itemId, size, quantity) => {

        if (!size) {
            toast.error('Select size.');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += quantity;
            }
            else {
                cartData[itemId][size] = quantity;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = quantity;
        }

        setCartItems(cartData);

        // login..
        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/add',
                    { itemId, size, quantity },
                    { headers: { token } }
                );
                toast.success("Item added to cart successfully.");
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

    }

    const getCartCount = () => { //update total number of items in cart

        let total = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items])
                try {
                    if (cartItems[items][item] > 0) {
                        total += cartItems[items][item];
                    }

                } catch (error) {

                }
        }

        return total;

    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        //update while logged in
        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update',
                    { itemId, size, quantity },
                    { headers: { token } }
                );
                toast.success("Item updated successfully.");

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

    }

   const getCartTotal = () => {
    let cartTotalS = 0;

    for (const items in cartItems) {
        let itemInfo = products.find((product) => product._id === items);

        // Check if itemInfo is valid before trying to access its price
        if (itemInfo) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    // Calculate total
                    cartTotalS += itemInfo.price * cartItems[items][item];
                }
            }
        }
    }
    return cartTotalS;
}



    //getting data from db
    const getBackEndData = async () => {

        try {

            const response = await axios.get(backendUrl + '/api/product/list')
            //db data available
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    //get prev cart data (in db)
    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {},
                { headers: { token } }
            )
            if (response.data.success) {
                //restore cart data
                setCartItems(response.data.cartData)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(() => {
        getBackEndData()
    }, [])

    useEffect(() => {
        const storedToken = localStorage.getItem('token'); // Retrieve token from localStorage
        if (storedToken && !token) {
            setToken(storedToken); // Update the state with the stored token
        }
        if (storedToken || token) {
            getUserCart(storedToken || token); // Fetch the cart using the token
        }
    }, [token]); // Trigger when the token state changes




    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartTotal,
        navigate,
        backendUrl,
        setToken,
        token,
        setCartItems
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;