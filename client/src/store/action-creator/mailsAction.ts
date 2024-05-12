import { Dispatch } from "redux"
import { MailAction, MailActionTypes } from "../../types/mail"
import { $host } from "../../http"



export const fetchMails = ( page: number = 1, limit: number = 10, order?: string, orderBy?: string, keyword?: string ) => {
    return async (dispatch: Dispatch<MailAction>) => {
        try {
            dispatch({type: MailActionTypes.FETCH_MAILS})
            const response = await $host.get('mails', {
                params: {page: page, limit: limit, order: order, orderBy: orderBy, keyword: keyword}
            })
            dispatch({type: MailActionTypes.FETCH_MAILS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: MailActionTypes.FETCH_MAILS_ERROR, payload: 'Ошибка загрузки с сервера' })
        }
    }
}

export const setMailPage = (page: number) => {
    return {type: MailActionTypes.SET_MAILS_PAGE, payload: page}
}

export const setMailCount = (count: number) => {
    return {type: MailActionTypes.SET_MAILS_COUNT, payload: count}
}

export const setMailKeyword = (keyword: string) => {
    return {type: MailActionTypes.SET_MAILS_KEYWORD, payload: keyword}
}

export const createMail = async (values) => {
    try {
        const response = await $host.post('mails', values);
        return response
    } catch (error) {
        return error
    }
}

export const editeMail = async (id: number, values) => {
    try {
        const response = await $host.put(`mails/${id}`, values)
        return response
    } catch (error) {
        return error
    }

}

export const deleteMail = async (id: number) => {
        try {
            const response = await $host.delete(`mails/${id}`)
            return response
        } catch (error) {
            return error
        }

}