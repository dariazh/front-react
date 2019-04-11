import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import { reducer as formReducer } from 'redux-form';


export default function configureState() {
    return createStore(combineReducers({
        cart: cartReducer,
        form: formReducer
    }));
}