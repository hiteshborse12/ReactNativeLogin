/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './login'
import TabView from './TabView'
AppRegistry.registerComponent(appName, () => TabView);
