import { GistAction, GiftActionTypes, GistState } from "../../types/gift"


const initialState: GistState = {
    gifts: [],
    loading: false,
    error: null,
    currentGift: {}
}

export const giftReducer = (state: GistState = initialState, action: GistAction): GistState => {
    switch (action.type) {
        case GiftActionTypes.FETCH_GIFTS:
            return {...state, loading: true}
        case GiftActionTypes.FETCH_GIFTS_SUCCESS:
            return {...state, loading: false, gifts: action.payload}
        case GiftActionTypes.FETCH_GIFTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case GiftActionTypes.SET_CURRENT_GIFT:
            return {...state, currentGift: action.payload}
        default:
            return state
    }
}