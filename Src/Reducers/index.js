import { combineReducers } from 'redux';
import FitchAllProfile from './fitxhAllProfiles';
import Registrations from './Registrations';
import Login from "./Login";
import Operations from "./Operations";
export default combineReducers({
    allProfiles: ()=>[],
    FitchAllProfile,
    Registrations,
    Login,
    Operations
})