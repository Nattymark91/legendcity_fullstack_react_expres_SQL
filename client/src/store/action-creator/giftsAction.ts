import { Dispatch } from "redux"
import { GistAction, GiftActionTypes } from "../../types/gift"
import { $host } from "../../http"


export const fetchGifts = () => {
    return async (dispatch: Dispatch<GistAction>) => {
        try {
            dispatch({type: GiftActionTypes.FETCH_GIFTS})
            const response = await $host.get('gifts')
            dispatch({type: GiftActionTypes.FETCH_GIFTS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GiftActionTypes.FETCH_GIFTS_ERROR, payload: 'Ошибка загрузки с сервера' })
        }
    }
}

export const fetchOneGifts = (id: number) => {
    return async (dispatch: Dispatch<GistAction>) => {
        try {
            const response = await $host.get(`gifts/${id}`)
            dispatch({type: GiftActionTypes.SET_CURRENT_GIFT, payload: response.data[0]})
        } catch (error) {
            dispatch({type: GiftActionTypes.FETCH_GIFTS_ERROR, payload: 'Ошибка загрузки с сервера' })
        }
    }
}

export const setCurrentGift = (gift: any) => {
    return {type: GiftActionTypes.SET_CURRENT_GIFT, payload: gift}
}



