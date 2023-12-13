import { produce } from "immer"


const parametreappState = {

  //paramètres generaux
  appFirstLaunch: true,
  appLanguage: false,
  loggedIn: false,
  snackBar: false

}

function appSettingsReducer(state = parametreappState, action) {

  let nextState

  switch (action.type) {

    case 'SET_APP_LANGUAGE':

      nextState = produce(state, draftState => {
        draftState.appLanguage = action.value
      })

      return nextState || state;

    case 'SET_APP_FIRST_LAUNCH':

      nextState = produce(state, draftState => {
        draftState.appFirstLaunch = action.value
      })

      return nextState || state;

    case 'SET_LOGIN':

      nextState = produce(state, draftState => {
        draftState.loggedIn = action.value
      })

      return nextState || state;

    case 'SET_SNACKBAR':

      nextState = produce(state, draftState => {
        draftState.snackBar = action.value
      })

      return nextState || state;


    default:

      return state
  }
}


export default appSettingsReducer;
