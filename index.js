/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './login'
import TabView from './TabView'
import AppNav from './AppNav'
AppRegistry.registerComponent(appName, () => AppNav);
