import { Fonts } from '../Fonts/Fonts'
const RegistrationAccoun = {
  backgroundContainer: {
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
    paddingTop: 100,
    flex: 1
  },
  validatorStyle: {
    alignSelf: "center",
    color: "red",
    fontSize: 15,
    paddingVertical: 5
  },
  emptyHeader: {
    height: "15%"
  },
  PalceHolder: {
    
    fontFamily: Fonts.BlueOcean
  },
  socialContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  socialButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#EA85C1",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },

  signInButton: {
    alignSelf: "center"
  },

  textInput: {
    textAlign: "center",
    color: "white",
    marginHorizontal: 20,
    fontSize: 20
    // paddingBottom: 10
  },
  forgetPasswordLabelText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  signUpLabelText: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
}
export default RegistrationAccoun;