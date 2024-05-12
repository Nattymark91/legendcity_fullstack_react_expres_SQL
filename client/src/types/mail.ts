
export interface MailState {
    mails: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    count: number;
    keyword: string;
}

export  enum MailActionTypes {
    FETCH_MAILS = 'FETCH_MAILS',
    FETCH_MAILS_SUCCESS = 'FETCH_MAILS_SUCCESS',
    FETCH_MAILS_ERROR = 'FETCH_MAILS_ERROR',
    SET_MAILS_PAGE = 'SET_MAILS_PAGE',
    SET_MAILS_COUNT = 'SET_MAILS_COUNT',
    SET_MAILS_KEYWORD = 'SET_MAILS_KEYWORD'
}
interface FetchMailAction{
    type: MailActionTypes.FETCH_MAILS;
}

interface FetchMailSuccessAction{
    type: MailActionTypes.FETCH_MAILS_SUCCESS;
    payload: any[];
}

interface FetchMailErrorAction{
    type: MailActionTypes.FETCH_MAILS_ERROR;
    payload: string;
}

interface SetMailPage{
    type: MailActionTypes.SET_MAILS_PAGE;
    payload: number;
}

interface SetMailCount{
    type: MailActionTypes.SET_MAILS_COUNT;
    payload: number;
}

interface SetMailKeyword{
    type: MailActionTypes.SET_MAILS_KEYWORD;
    payload: string;
}

export type MailAction = FetchMailAction | FetchMailSuccessAction | FetchMailErrorAction | SetMailPage | SetMailCount | SetMailKeyword
