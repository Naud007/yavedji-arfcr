import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import createSagaMiddleware from "redux-saga"
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
import createSensitiveStorage from "redux-persist-sensitive-storage";


//import reducer
import appSettingsReducer from './reducers/appSettingsReducer'
import appProfileReducer from './reducers/appProfileReducer' 


//import saga
import {rootSaga} from './sagas/indexSaga'



const secureStorage = createSensitiveStorage({
    keychainService: "myKeychain",
    sharedPreferencesName: "mySharedPrefs"
});

const configureStore = () => {

    const securePersistConfig = {
        key: "secureapp",
        storage: secureStorage
    };

    // Non-secure (ExpoFileSystemStorage) storage
    const rootPersistConfig = {
        key: 'parametreapp',
        storage: ExpoFileSystemStorage,
        whitelist : ['appLanguage', 'loggedIn', 'appFirstLaunch']
    }

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(

        combineReducers({
            appSettingsReducer: persistReducer(rootPersistConfig, appSettingsReducer),
            appProfileReducer: persistReducer(securePersistConfig, appProfileReducer)
        }),  
        
        applyMiddleware(sagaMiddleware)
    );
  
    sagaMiddleware.run(rootSaga);
  
    return store;
};
  
export default configureStore;


