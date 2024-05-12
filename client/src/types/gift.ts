
export interface GistState {
    gifts: any[];
    loading: boolean;
    error: null | string;
    currentGift: any
}

export  enum GiftActionTypes {
    FETCH_GIFTS = 'FETCH_GIFTS',
    FETCH_GIFTS_SUCCESS = 'FETCH_GIFTS_SUCCESS',
    FETCH_GIFTS_ERROR = 'FETCH_GIFTS_ERROR',
    SET_CURRENT_GIFT = 'SET_CURRENT_GIFT',
}
interface FetchGiftAction{
    type: GiftActionTypes.FETCH_GIFTS;
}

interface FetchGiftSuccessAction{
    type: GiftActionTypes.FETCH_GIFTS_SUCCESS;
    payload: any[];
}

interface FetchGiftErrorAction{
    type: GiftActionTypes.FETCH_GIFTS_ERROR;
    payload: string;
}

interface SetCurrentGift{
    type: GiftActionTypes.SET_CURRENT_GIFT;
    payload: any;
}

export type GistAction = FetchGiftAction | FetchGiftSuccessAction | FetchGiftErrorAction | SetCurrentGift
