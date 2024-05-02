import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo, otherwise use another icon library

import HomeScreen from './Screens/HomeScreen';
import WorkoutScreen from './Screens/WorkoutScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ExploreScreen from './Screens/ExploreScreen';
import PlansScreen from './Screens/PlansScreen'; // Import the PlansScreen component

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Workout') {
              iconName = 'fitness';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Explore') {
              iconName = 'search';
            } else if (route.name === 'Plans') {
              iconName = 'document'; // Assuming 'document' represents plans icon
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workout" component={WorkoutScreen} />

        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Plans" component={PlansScreen} />
         <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;



//import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo, otherwise use another icon library
//
//import HomeScreen from './Screens/HomeScreen';
//import WorkoutScreen from './Screens/WorkoutScreen';
//import ProfileScreen from './Screens/ProfileScreen';
//import ExploreScreen from './Screens/ExploreScreen';
//
//const Tab = createBottomTabNavigator();
//
//const App = () => {
//  return (
//    <NavigationContainer>
//      <Tab.Navigator
//              screenOptions={({ route }) => ({
//                tabBarIcon: ({ color, size }) => {
//                  let iconName;
//
//                  if (route.name === 'Home') {
//                    iconName = 'home';
//                  } else if (route.name === 'Workout') {
//                    iconName = 'fitness';
//                  } else if (route.name === 'Profile') {
//                    iconName = 'person';
//                  } else if (route.name === 'Explore') {
//                    // Set the iconName to the explore icon
//                    iconName = 'search';
//                  }
//
//                  // Return the Ionicons component with the specified icon name, size, and color
//                  return <Ionicons name={iconName} size={size} color={color} />;
//                },
//              })}
//              tabBarOptions={{
//                activeTintColor: 'blue',
//                inactiveTintColor: 'gray',
//              }}
//            >
//              <Tab.Screen name="Home" component={HomeScreen} />
//              <Tab.Screen name="Workout" component={WorkoutScreen} />
//              <Tab.Screen name="Profile" component={ProfileScreen} />
//              <Tab.Screen name="Explore" component={ExploreScreen} />
//            </Tab.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default App;
//
//
