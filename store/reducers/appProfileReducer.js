import produce from "immer"

const profilappState = {

    token: {

    },

    profileData: {

    }
}

function appProfileReducer (state = profilappState, action ) {

    let nextState

    switch (action.type) {

        case 'SET_TOKEN':
        
            nextState = produce(state, draftState => {
                draftState.token = action.value
            })

            return nextState || state;


        case 'SET_PROFILE_DATA':
        
            nextState = produce(state, draftState => {
              draftState.profileData = action.value
            })

            return nextState || state;


        default:

            return state
    }
}


export default appProfileReducer;
