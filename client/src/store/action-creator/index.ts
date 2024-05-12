import * as MailActionCreators from './mailsAction'
import * as GiftActionCreators from './giftsAction'

export default {
    ...MailActionCreators,
    ...GiftActionCreators
}