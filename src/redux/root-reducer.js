import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const storageConfig = {
    key:'root',
    storage,
    // Reducer to persist
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory: directoryReducer,
    shop:shopReducer
})
//Intergrate local storage;
export default persistReducer(storageConfig,rootReducer);