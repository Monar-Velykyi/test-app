import React from 'react';

//React-Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Redux
import {Provider} from 'react-redux'
import {store} from './redux/redux-store'

//Components
import {FullImage} from './components/FullImage'
import {GalleryInfo} from './components/Gallery'


const Stack = createStackNavigator();


export const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="GalleryInfo" 
          component={GalleryInfo} 
          options={{title: 'Welcome'}}/>
          <Stack.Screen
            name="FullImage"
            component={FullImage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


// this isn't my best work
// but i had to get it by deadline