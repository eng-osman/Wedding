const INITSTATE = {
    Email: '',
    Password: '',
    token: '',
    status: 0,
    ErorrMsg: ''
}
export default (state = INITSTATE, action) => {
    switch (action.type) {
        case 'loginSucess':
            return {
                ...state, token: action.payload
            }
        case 'loginFaild':
            return {
                ...state, ErorrMsg: action.payload
            }
        case 'Email':
            return {
                ...state, Email: action.payload
            }
        case 'Password':
            return {
                ...state, Password: action.payload
            }
        case 'loginWithFBSucess':
            return {
                ...state, Email: action.payload
            }
        case 'Erorrinrequest':
            return {
                ...state, ErorrMsg: action.payload
            }
        default:
            return state
    }
}