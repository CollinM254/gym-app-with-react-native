// Import necessary components and libraries
import { createStackNavigator } from '@react-navigation/stack';
import TimerScreen from './TimerScreen'; // Import TimerScreen component

// Create a stack navigator
const Stack = createStackNavigator();

// Define navigation stack
const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TimerScreen" component={TimerScreen} /> // Register TimerScreen component
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
}

export default NavigationStack;
