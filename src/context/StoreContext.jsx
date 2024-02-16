import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToBasket = (product) => {
        let updatedProducts = [...state.products];
        let existingProduct = updatedProducts.findIndex((currentProduct) => currentProduct.id === product.id);
        if (existingProduct !== -1) {
            updatedProducts[existingProduct].amount += 1;
        } else {
            updatedProducts.push({ ...product, amount: 1 });
        }
        
        updatePrice(updatedProducts);

        dispatch({
            type: "add",
            payload: updatedProducts,
        });
    }

    const removeFromBasket = (product) => {
        const updatedBasket = state.products.filter((currentProduct) => currentProduct.id !== product.id);
        
        updatePrice(updatedBasket);

        dispatch({
            type: "remove",
            payload: updatedBasket,
        });
    }

    const updateQuantity = (productId, newQuantity) => {
        const updatedProducts = state.products.map(product => {
            if (product.id === productId) {
                return { ...product, amount: newQuantity };
            }
            return product;
        });

        updatePrice(updatedProducts);

        dispatch({
            type: "update qty",
            payload: updatedProducts,
        });
    };

    const updatePrice = (products) => {
        let total = products.reduce((acc, product) => {
            return acc + parseFloat(product.price) * product.amount;
        }, 0);

        dispatch({
            type: "update price",
            payload: total.toFixed(2),
        });
    }

    const value = {
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket,
        updateQuantity,
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};