import {combineReducers} from 'redux';
import { mailReducer } from './mailReducer';
import { giftReducer } from './giftReducer';

export const rootReducer = combineReducers({ 
    mail: mailReducer,
    gift: giftReducer
})

export type RootState = ReturnType<typeof rootReducer>