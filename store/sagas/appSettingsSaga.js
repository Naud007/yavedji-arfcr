import { takeLatest, put, call, all } from "redux-saga/effects"





function* usernameVerification(payload) {



}


function* deconnexion(payload) {
    console.log('DECONEXION');
    yield all([
        put({ type: "DeconnexionParam"})
    ])
}


export const appSettingsSaga = [
    takeLatest("USERNAME_VERIF", usernameVerification),
    takeLatest("DECONNEXION", deconnexion)
]
