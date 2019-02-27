const initState = {
    allProfile: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'fitchAllProfileSuccsess':
            return { ...state, allProfiles: action.payload }
        default:
            return state
    }
}