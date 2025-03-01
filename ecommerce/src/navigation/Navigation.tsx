import Splash from '@modules/onboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import {navigationRef} from './NavigationUtil';
import MainNavigator from './MainNavigator';
import Products from '@modules/products';
import Cart from '@modules/cart';
import PaymentSuccess from '@modules/payment_success';
import Account from '@modules/account';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
