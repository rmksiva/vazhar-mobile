import { registerRootComponent } from 'expo';
import { init } from 'kinvey-react-native-sdk';
import App from './App';

init({
    appKey: 'kid_SyPhe6OBP',
    appSecret: '01bfde2d3dd14cbead65f2f897ad53bd'
  });

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
