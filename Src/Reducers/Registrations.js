const InitState = {
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    Gender: '',
    Image: '',
    Age: 0,
    Height: 0,
    Weight: 0,
    Religion: '',
    City: '',
    Country: '',
    Nationalty: '',
    Status: '',
    And: 0,
    Between: 0,
    ColorSkin: '',
    ReadyToMerage: '',
    PartnerSkinColor: '',
    PartnerSalary: '',
    Education: '',
    Brad: '',
    IWantToKnow: '',
    StatusCode: 0,
    token:'',
    Erorr: ''
}
export default (state = InitState, action) => {
    switch (action.type) {
        case 'Name':
            return {
                ...state, Name: action.payload
            }
        case 'Email':
            return {
                ...state, Email: action.payload
            }
        case 'Password':
            return {
                ...state, Password: action.payload
            }
        case 'ConfirmPassword':
            return {
                ...state, ConfirmPassword: action.payload
            }
        case 'GenderType':
            return {
                ...state, Gender: action.payload
            }
        case 'ImageUri':
            return {
                ...state, Image: action.payload
            }
        case 'AgeType':
            return {
                ...state, Age: action.payload
            }
        case 'HeightType':
            return {
                ...state, Height: action.payload
            }
        case 'WeightType':
            return {
                ...state, Weight: action.payload
            }
        case 'ReligionType':
            return {
                ...state, Religion: action.payload
            }
        case 'CityType':
            return {
                ...state, City: action.payload
            }
        case 'CountryType':
            return {
                ...state, Country: action.payload
            }
        case 'NationaltyType':
            return {
                ...state, Nationalty: action.payload
            }
        case 'StatusType':
            return {
                ...state, Status: action.payload
            }
        case 'BetweenType':
            return {
                ...state, Between: action.payload
            }
        case 'AndType':
            return {
                ...state, And: action.payload
            }
        case 'ColorSkinType':
            return {
                ...state, ColorSkin: action.payload
            }
        case 'ReadyToMerageType':
            return {
                ...state, ReadyToMerage: action.payload
            }
        case 'IWantToKnowType':
            return {
                ...state, IWantToKnow: action.payload
            }
        case 'PartnerSkinColorType':
            return {
                ...state, PartnerSkinColor: action.payload
            }
        case 'PartnerSalaryType':
            return {
                ...state, PartnerSalary: action.payload
            }
        case 'EducationType':
            return {
                ...state, Education: action.payload
            }
        case 'BradType':
            return {
                ...state, Brad: action.payload
            }
        case 'RegistSucsecc':
            return {
                ...state, StatusCode: action.payload
            }
        case 'RegistFalid':
            return {
                ...state, StatusCode: action.payload
            }
        case 'RegistFalidFromAxios':
            return {
                ...state, StatusCode: action.payload
            }
        case 'loginSucess':
            return {
                ...state, token: action.payload
            }
        case 'loginFaild':
            return {
                ...state, StatusCode: action.payload
            }
            case 'registSecsuess':
            return {
                ...state, StatusCode: action.payload
            }
            case 'registFaild':
            return {
                ...state, StatusCode: action.payload
            }
            case 'registErorr':
            return {
                ...state, Erorr: action.payload
            }
            case 'RegistWithFBSucess':
            return {
                ...state, Email: action.payload.email, Name: action.payload.name,Password: '123456789',ConfirmPassword: '123456789'
            }
            case 'ErorrinrequestFaceBook':
            return {
                ...state, Erorr: action.payload
            }
        default:
            return state
    }
}