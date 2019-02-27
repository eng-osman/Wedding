const Init_State = {
    UserInfo: {},
    IDInfo: {},
    MyMsg : []
}
export default (state = Init_State, action) => {
    switch (action.type) {
        case 'myInfo':
            return { ...state, UserInfo: action.payload }
            case 'IDInfo':
            return { ...state, IdInfo: action.payload }
            case 'loadMyMsg':
            return { ...state, MyMsg: action.payload }
        default:
            return state
    }
}