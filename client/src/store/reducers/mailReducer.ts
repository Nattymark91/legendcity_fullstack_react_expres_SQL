import { MailAction, MailActionTypes, MailState } from "../../types/mail"


const initialState: MailState = {
    mails: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    count: 0,
    keyword: ''
}

export const mailReducer = (state: MailState = initialState, action: MailAction): MailState => {
    switch (action.type) {
        case MailActionTypes.FETCH_MAILS:
            return {...state, loading: true}
        case MailActionTypes.FETCH_MAILS_SUCCESS:
            return {...state, loading: false, mails: action.payload, 
                count: action.payload.length ? action.payload[0].count : 0}
        case MailActionTypes.FETCH_MAILS_ERROR:
            return {...state, loading: false, error: action.payload}
        case MailActionTypes.SET_MAILS_PAGE:
            return {...state, page: action.payload}
        case MailActionTypes.SET_MAILS_COUNT:
            return {...state, count: action.payload}
        case MailActionTypes.SET_MAILS_KEYWORD:
            return {...state, keyword: action.payload}
        default:
            return state
    }
}