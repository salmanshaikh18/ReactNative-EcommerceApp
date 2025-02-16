/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// Disable carousel logs which is coming from carousel library
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

// disable system font size apply on our app
if (Text.defaultProps) {
  Text.defaultProps.allowFontScalling = false;
} else {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScalling = false;
}

if (TextInput.defaultProps) {
  TextInput.defaultProps.allowFontScalling = false;
} else {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScalling = false;
}

AppRegistry.registerComponent(appName, () => App);
