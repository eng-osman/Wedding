import { createStackNavigator } from 'react-navigation';
import RegistrationAccount from '../Registrtions/RegistrationAccount';
import RegistrationBeardTypeList from '../Registrtions/RegistrationBeardTypeList';
import RegistrationEducationPreferences from '../Registrtions/RegistrationEducationPreferences';
import Registrations from '../Registrtions/Registrations';
import RegistrationMarriageTypes from '../Registrtions/RegistrationMarriageTypes';
import RegistrationPersonalInfo from '../Registrtions/RegistrationPersonalInfo';
import RegistrationEthnicPreferences from '../Registrtions/RegistrationEthnicPreferences';
import RegistrationsMySkinColor from '../Registrtions/RegistrationsMySkinColor';
import RegistrationLocationPreferences from '../Registrtions/RegistrationLocationPreferences';
import RegistrationIWantToKnow from '../Registrtions/RegistrationIWantToKnow';
import SignInScreen from '../Login/SignInScreen';

const RegistrationStack = createStackNavigator({
    SignInScreen: SignInScreen,
    Account: RegistrationAccount,
    PersonalInfo: RegistrationPersonalInfo,
    EthnicPreferences: RegistrationEthnicPreferences,
    Registrations: Registrations,
    RegistrationLocationPreferences: RegistrationLocationPreferences,
    MarriagePreferences: RegistrationMarriageTypes,
    SkinPreferences: RegistrationsMySkinColor,
    BeardPreferences: RegistrationBeardTypeList,
    iWantToKnow: RegistrationIWantToKnow,
    EducationPreferences: RegistrationEducationPreferences,
})

export default RegistrationStack;