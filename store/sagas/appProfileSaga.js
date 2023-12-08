import { takeLatest, put, call, all } from "redux-saga/effects"



function* simpleDeconnexion(payload) {



}




export const appProfileSaga = [
    takeLatest("SIMPLECONNEXION", simpleDeconnexion)
]
