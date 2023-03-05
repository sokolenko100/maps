import {IS_TESTS} from '@constants/platforms'; // This import allows access to platform constants
import AsyncStorage from '@react-native-async-storage/async-storage'; // This import allows access to AsyncStorage methods
import Reactotron from 'reactotron-react-native'; // This import allows for better debugging with Reactotron
import {reactotronRedux} from 'reactotron-redux'; // Allows Reactotron use in Redux
import sagaPlugin from 'reactotron-redux-saga'; // This plugin allows for the use of Reactotron for Redux Saga

if (__DEV__ && !IS_TESTS) {
  // console.log = Reactotron.log; // for console.log in reactotron
}

const reactotronConfig = IS_TESTS
  ? {}
  : Reactotron.setAsyncStorageHandler(AsyncStorage) // Sets up asynchronous storage handler
      .configure() //Configures the connection and communication settings
      .use(reactotronRedux()) // Allows usage of Redux on Reactotron
      .use(sagaPlugin()) // Incorporates redux-saga into Reactotron
      .useReactNative() // Adds all of the built-in react native plugins
      .connect(); // establishes connection to Reactotron

export default reactotronConfig;
