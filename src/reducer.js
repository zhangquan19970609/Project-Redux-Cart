import { 
    DECREASE,
    INCREASE,
    CLEAR_CART,
    REMOVE,
    GET_TOTALS,
    TOGGLE_AMOUNT,
} from './actions';

import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total:0,
  amount: 0
}

function reducer(state = initialStore,action) {
    // console.log({state,action});
  // one thing about Redux store: it is immutable, 
    // meaning every time action alters it, a new store should be created & saved.
    switch(action.type) {
        // case INCREASE:
            //     console.log('INCREASE invoked!');
            //     let tempCart = state.cart.map((item) => {
            //         if (item.id === action.payload.id) {
            //             return {...item, amount: item.amount + 1}
            //         }
            //         return item;
            //     })
            //     return {...state, cart: tempCart }
    
            // case DECREASE:
            //     console.log('DECREASE invoked!');
            //     let newCart = state.cart.map((item) => {
            //         if (item.id === action.payload.id) {
            //             return {...item, amount: item.amount - 1}
            //             }
            //         return item
            //     })
            //     return { ...state, cart: newCart}

        case CLEAR_CART:
            return { ...state, cart:[]};

        case GET_TOTALS:
            console.log('GET_TOTALS invoked!');

            let {total, amount} = state.cart.reduce(
                (cartTotal, cartItem) => {

                    cartTotal.total += cartItem.amount * cartItem.price;
                    cartTotal.amount += cartItem.amount;
                    
                    return cartTotal
                }, {total:0, amount:0})
            
                console.log(total, amount)

            return {...state, total: total, amount: amount}

        case REMOVE:
            console.log('REMOVE invoked!');
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id)}
        case TOGGLE_AMOUNT:
            console.log('TOGGLE_AMOUNT invoked!');
            let tempCart = [];
            if (action.payload.toggle === '+'){
                tempCart = state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, amount: item.amount + 1}
                    }
                return item;
            })
            } else {
                tempCart = state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, amount: item.amount - 1}
                    }
                    return item
                })
            } 
            return {...state, cart: tempCart }
        default:
            return state
    }
}

export default reducer;

